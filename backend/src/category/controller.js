const dbHelper = require('./dbHelper');
const categoryViewModel = require('./viewModel');

const controller = {}
controller.createcategory = async (req) => {
    try {
        if (!req.body.name) return 'field required';
        const existingCategory = await dbHelper.checkCategory(req.body.name);
        if (existingCategory) {
            return 'category already exists'
        }
        return await dbHelper.createcategory(req.body.name);
    } catch (error) {
        return Promise.reject(error)
    }
}

controller.updatecategory = async (req) => {
    try {
        if (!req.params.name && !req.params.categoryId) return 'field required';

        return await dbHelper.updatecategory(req.params.categoryId, req.params.name);
    } catch (error) {
        return Promise.reject(error)
    }
}

controller.getAllCategory = async () => {
    try {
        return await dbHelper.getAllCategory();
    } catch (error) {
        return Promise.reject(error)
    }
}

controller.getCategoryBySlug = async (req) => {
    try {
        return await dbHelper.getCategoryBySlug(req.params.id);
    } catch (error) {
        return Promise.reject(error)
    }
}
controller.deleteCategoryById = async (req) => {
    try {
        return await dbHelper.deleteCategoryById(req.params.id)
    } catch (error) {
        return Promise.reject(error)
    }
}
module.exports = controller;