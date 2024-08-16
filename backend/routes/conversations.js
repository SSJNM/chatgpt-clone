const express = require('express');
const router = express.Router();
const { startConversation, getConversations } = require('../controllers/conversationController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', authMiddleware, getConversations);
router.post('/start/', authMiddleware, startConversation);
// router.post('/end/:conversationId/', authMiddleware, endConversation);
// Removing end conversation its not required
module.exports = router;
