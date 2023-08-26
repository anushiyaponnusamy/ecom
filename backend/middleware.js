const jwtToken = require('jsonwebtoken');
const dbHelper = require('./src/user/dbHelper');

const validationMiddleware = {}

validationMiddleware.validateToken = async (req, res, next) => {
    try {
        console.log(req.headers.authorization)
        const decoded = jwtToken.verify(req.headers.authorization, process.env.JWT_SECRET);

        if (decoded) {
            const user = await dbHelper.getUserByUserId(decoded._id);
            req.decoded = user;
        }
        next();
    } catch (error) {
        return Promise.reject(error)
    }
}
validationMiddleware.validateAdmin = async (req, res, next) => {
    try {

        if (req?.decoded?.role === "admin")
            next();
        else
            return "unauthorized ,not an admin"
    } catch (error) {
        return Promise.reject(error)
    }
}
module.exports = validationMiddleware;