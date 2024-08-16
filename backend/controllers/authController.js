const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../models');
const generateToken = require('../utils/generateToken');
const sendVerificationEmail = require('../utils/emailVerification');

exports.register = async (req, res) => {
    const { username, password, email} = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword)
        const newUser = await db.User.create({ username, password: hashedPassword, email });
        const token = generateToken(newUser.id)
        // Send verification email
        const verificationLink = `http://localhost:3000/verify-email?token=${token}`;
        await sendVerificationEmail(newUser.email, verificationLink);

        res.status(200).json({ message: 'Registration successful! Please check your email to verify your account.' });
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Failed to register user' });
    }
};

exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await db.User.findOne({ where: { username } });
        if (!user) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        const isVerified = user.isVerified;
        if (!isVerified) {
            return res.status(403).json({ error: 'Please verify your email' });
        }

        const token = generateToken(user.id);
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Failed to log in' });
    }
};

exports.validate_token = async (req, res) => {
    const { token } = req.body;
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        res.json({ valid: true });
      } catch (err) {
        res.json({ valid: false });
      }
};

exports.verify_email = async (req, res) => {
    const { token } = req.query;
    
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const userId  = decoded.userId;
      const user = await db.User.findOne({ where: { id: userId } });
      user.isVerified = true;
      await user.save();
  
      res.status(200).json({ message: 'Email verified successfully!' });
    } catch (error) {
        console.log(error)
      res.status(400).json({ message: 'Invalid or expired token' });
    }
  };
  