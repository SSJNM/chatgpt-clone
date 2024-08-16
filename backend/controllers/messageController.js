const db = require('../models');
const generateResponse = require('../utils/generateResponse');

exports.sendMessage = async (req, res) => {
    const { userId } = req.data;
    const { conversationId,content } = req.body;
    
    console.log(conversationId,content)
    try {
        const message = await db.Message.create({ conversationId, userId, content });
        const messageId = message.id;
        const botResponse = await generateResponse(content);
        message.response = botResponse;
        await message.save();
        res.status(201).json(message);
    } catch (error) {
        res.status(500).json({ error: 'Failed to send message' });
    }
};


exports.getMessages = async (req, res) => {
    const { conversationId } = req.params;
    
    try {

        const messages = await db.Message.findAll({
            where: { conversationId },
            order: [['createdAt', 'ASC']] 
        });

        if (messages.length === 0) {
            return res.status(404).json({ message: 'No messages found for this conversation' });
        }

        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve messages' });
    }

};