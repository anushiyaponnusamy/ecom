const jwtToken = require('jsonwebtoken');
const dbHelper = require('./src/user/dbHelper');

const validationMiddleware = {}

validationMiddleware.validateToken = async (req, res, next) => {
    try {
        const decoded = jwtToken.verify(req.headers.authorization, process.env.JWT_SECRET);
        req.decoded = decoded;
        next();
    } catch (error) {
        return Promise.reject(error)
    }
}
validationMiddleware.validateAdmin = async (req, res, next) => {
    try {
        const user = await dbHelper.getUserByUserId(req.decoded._id)
        if (user?.role === "admin")
            next();
        else
            return "unauthorized ,not an admin"
    } catch (error) {
        return Promise.reject(error)
    }
}
module.exports = validationMiddleware;