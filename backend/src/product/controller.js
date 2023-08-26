const dbHelper = require('./dbHelper');
const productViewModel = require('./viewModel');
const categoryViewModel = require('./viewModel');

const controller = {}
controller.createproduct = async (req) => {
    try {
        if (!req.body.name) return 'field required';
        const existingCategory = await dbHelper.checkCategory(req.body.name);
        if (existingCategory) {
            return 'category already exists'
        }
        return await dbHelper.createproduct(req.body.name);
    } catch (error) {
        return Promise.reject(error)
    }
}

controller.updateproduct = async (req) => {
    try {
        if (!req.body) return 'field required';
        const updateViewModel = productViewModel.updateViewModel(req);
        return await dbHelper.updateproduct(updateViewModel, req.body.id);
    } catch (error) {
        return Promise.reject(error)
    }
}

controller.getAllProduct = async () => {
    try {
        return await dbHelper.getAllProduct();
    } catch (error) {
        return Promise.reject(error)
    }
}

controller.getProductById = async (req) => {
    try {
        return await dbHelper.getProductById(req.params.id);
    } catch (error) {
        return Promise.reject(error)
    }
}

controller.getProductBySlug = async (req) => {
    try {
        return await dbHelper.getProductBySlug(req.params.slug);
    } catch (error) {
        return Promise.reject(error)
    }
}

controller.deleteproductById = async (req) => {
    try {
        return await dbHelper.deleteproductById(req.params.id);
    } catch (error) {
        return Promise.reject(error)
    }
}

controller.getProductPhotoById = async (req) => {
    try {
        return await dbHelper.getProductPhotoById(req.params.id)
    } catch (error) {
        return Promise.reject(error)
    }
}
module.exports = controller;