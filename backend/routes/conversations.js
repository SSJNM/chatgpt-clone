const express = require('express');
const router = express.Router();
const { startConversation, getConversations, deleteConversation } = require('../controllers/conversationController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', authMiddleware, getConversations);
router.post('/start/', authMiddleware, startConversation);
router.post('/delete/:conversationId/', authMiddleware, deleteConversation);
// Removing end conversation its not required
module.exports = router;
