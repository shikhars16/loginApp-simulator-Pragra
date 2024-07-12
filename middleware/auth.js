const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const secretKey = "secret";
const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        if (token) {
            let decoded = jwt.verify(token, secretKey);
            req.body.userID = decoded.id;
            return next();
        } 
        else {
            return res.status(400).send("Unauthorized");
        }
    } catch (err) {
        return res.status(400).json({ "message": err.message });
    }
}

module.exports = auth;