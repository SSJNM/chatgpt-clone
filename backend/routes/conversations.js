const express = require('express');
const router = express.Router();
const { startConversation, endConversation } = require('../controllers/conversationController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/start/', authMiddleware, startConversation);
router.post('/end/:conversationId/', authMiddleware, endConversation);

module.exports = router;
