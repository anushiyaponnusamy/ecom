const dbHelper = require('./dbHelper');
const JWT = require('jsonwebtoken')
const { hashPassword, comparePassword } = require('./helper');
const userViewModel = require('./viewModel');

const controller = {}
controller.signUp = async (req) => {
    try {
        if (!req.body && !req.body.userName && !req.body.email && !req.body.password && !req.body.mobile) return "field required";
        const emailExists = await dbHelper.checkUserByEmail(req.body.email);
        if (emailExists) return "email already exists"
        const mobileNoExists = await dbHelper.checkUserByMobile(req.body.mobile);
        if (mobileNoExists) return "mobileNumber already exists"
        const hashedPassword = await hashPassword(req.body.password)
        const isValid = await comparePassword(req.body.password, hashedPassword);
        console.log(req.body.password, "||", hashedPassword)
        if (isValid) {
            const viewModels = userViewModel.signUpViewModel(req, hashedPassword);
            const result = await dbHelper.signUp(viewModels);
            const token = JWT.sign({ userId: result._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

            return { ...result._doc, token }
        } else {
            return "invalid credentials"
        }
    } catch (error) {
        Promise.reject(error)
    }
}

controller.login = async (req) => {
    try {
        if (!req.body.email && !req.body.password) return "field required";
        const userExists = await dbHelper.checkUserByEmail(req.body.email);
        if (!userExists) return "user does not exist"
        const isValid = await comparePassword(req.body.password, userExists.password);
        if (!isValid)
            return "invalid credentials";
        const token = JWT.sign({ _id: userExists?._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
        return { email: userExists.email, _id: userExists?._id, mobile: userExists?.mobile, role: userExists?.role, userName: userExists?.userName, token }
    } catch (error) {
        Promise.reject(error)
    }
}

controller.updateById = async () => {
    try {
        const viewModel = userViewModel.updateViewModel(req);
        return await dbHelper.updateById(viewModel);
    } catch (error) {
        Promise.reject(error)
    }
}

controller.getAllUsers = async () => {
    try {
        return await dbHelper.getAllUsers();
    } catch (error) {
        Promise.reject(error)
    }
}

controller.getUserByUserId = async (req) => {
    try {
        if (!req.params.userId) return "field required";
        return await dbHelper.getUserByUserId(req.params.userId);
    } catch (error) {
        Promise.reject(error)
    }
}

controller.deleteUserByUserId = async (req) => {
    try {
        if (!req.params.userId) return "field required";
        return await dbHelper.deleteUserByUserId(req.params.userId);
    } catch (error) {
        Promise.reject(error)
    }
}
module.exports = controller;