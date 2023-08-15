const UserSchema = require('./model')
const dbHelper = {}

dbHelper.signUp = async (req) => {
    try {
        const obj = new UserSchema(req);
        return await obj.save();
    } catch (error) {
        Promise.reject(error)
    }
}

dbHelper.checkUserByEmail = (email) => {
    try {
        return UserSchema.findOne({ email });
    } catch (error) {
        Promise.reject(error)
    }
}
dbHelper.checkUserByMobile = (mobile) => {
    try {
        return UserSchema.findOne({ mobile });
    } catch (error) {
        Promise.reject(error)
    }
}
dbHelper.updateById = (userId, viewModel) => {
    try {
        return UserSchema.updateOne({ _id: userId }, { $set: { ...viewModel } })
    } catch (error) {
        Promise.reject(error)
    }
}

dbHelper.getAllUsers = () => {
    try {
        return UserSchema.find({ active: true });
    } catch (error) {
        Promise.reject(error)
    }
}

dbHelper.getUserByUserId = (userId) => {
    try {
        return UserSchema.findOne({ _id: userId, active: true });
    } catch (error) {
        Promise.reject(error)
    }
}

dbHelper.getUserByUserId = (userId) => {
    try {
        return UserSchema.findOne({ _id: userId, active: true });
    } catch (error) {
        Promise.reject(error)
    }
}

dbHelper.deleteUserByUserId = (userId) => {
    try {
        return UserSchema.updateOne({ _id: userId }, { active: false });
    } catch (error) {
        Promise.reject(error)
    }
}

module.exports = dbHelper;