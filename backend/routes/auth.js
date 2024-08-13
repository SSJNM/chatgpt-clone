const express = require('express');
const router = express.Router();
const { register, login, validate_token } = require('../controllers/authController');

router.post('/register/', register);
router.post('/login/', login);
router.post('/validate-token', validate_token);

module.exports = router;
