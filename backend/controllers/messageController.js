const db = require('../models');
const generateResponse = require('../utils/generateResponse');

exports.sendMessage = async (req, res) => {
    const { userId } = req.data;
    const { conversationId,content,senderType } = req.body;
    try {
        const message = await db.Message.create({ conversationId, userId, content, senderType });
        const messageId = message.id;
        if (senderType === 'User') {
            const botResponse = await generateResponse(content);
            const responseMessage = await db.Response.create({
                messageId,
                content: botResponse,
                senderType: 'Bot'
            });
            // console.log(message.response.content)
            console.log(responseMessage)
        }

        res.status(201).json(message);
    } catch (error) {
        res.status(500).json({ error: 'Failed to send message' });
    }
};
