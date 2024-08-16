const express = require('express');
const router = express.Router();
const { register, login, validate_token, verify_email } = require('../controllers/authController');

router.post('/register/', register);
router.post('/login/', login);
router.post('/validate-token', validate_token);
router.post('/verify-email', verify_email);

module.exports = router;
