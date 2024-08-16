const jwt = require('jsonwebtoken')
const db = require('../models');

exports.getConversations = async (req, res) => {
    const {userId} = req.data

    try {
        const conversations = await db.Conversation.findAll({
            where: { userId },
            order: [['createdAt', 'DESC']]
        });

        res.status(200).json(conversations);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve conversations' });
    }
};

exports.startConversation = async (req, res) => {
    const { userId } = req.data;
    console.log(userId)
    try {
        const conversation = await db.Conversation.create({ userId});
        res.status(201).json(conversation);
    } catch (error) {
        res.status(500).json({ error: 'Failed to start conversation' });
    }
};

exports.endConversation = async (req, res) => {
    const { conversationId } = req.params;

    try {
        const conversation = await db.Conversation.findByPk(conversationId);
        if (!conversation) {
            return res.status(404).json({ error: 'Conversation not found' });
        }

        conversation.endTime = new Date();
        await conversation.save();
        res.status(200).json(conversation);
    } catch (error) {
        res.status(500).json({ error: 'Failed to end conversation' });
    }
};
