const express = require('express');
const router = express.Router();
const { sendMessage } = require('../controllers/messageController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/send/', authMiddleware, sendMessage);

module.exports = router;
