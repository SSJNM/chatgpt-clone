const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.sendStatus(401);
    jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
        if (err) return res.sendStatus(403);
        // console.log(data)
        // console.log(req.data)
        req.data = data;
        next();
    });
};

module.exports = authenticateToken;
