const express = require('express');
const router = express.Router();
const { sendMessage,getMessages } = require('../controllers/messageController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/:conversationId/', authMiddleware, getMessages);
router.post('/send/', authMiddleware, sendMessage);

module.exports = router;
