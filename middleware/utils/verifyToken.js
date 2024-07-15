const secretKey = "secret";
const jwt = require('jsonwebtoken') 
const verifyToken = (req, res, next) => {
    console.log("verifyToken")
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ message: 'No token provided' });
  
    jwt.verify(token.split(' ')[1], secretKey, (err, decoded) => {
      if (err) return res.status(403).json({ message: 'Failed to authenticate' });
      req.userId = decoded.id;
      next();
    });
  };

  module.exports = verifyToken