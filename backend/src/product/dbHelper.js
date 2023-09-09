
const ProductSchema = require('./model')
const dbHelper = {}

dbHelper.createproduct = async (input) => {
    try {
        const obj = new ProductSchema(input);
        return await obj.save();
    } catch (error) {
        return Promise.reject(error)
    }
}

dbHelper.updateproduct = async (viewModel, id) => {
    try {
        return await ProductSchema.updateOne({ _id: id }, { $set: { ...viewModel } }, { new: true })
    } catch (error) {
        return Promise.reject(error)
    }
}

dbHelper.getAllProduct = () => {
    try {
        return ProductSchema.find({}).populate('category').sort({ createdDate: -1 });
    } catch (error) {
        return Promise.reject(error)
    }
}

dbHelper.getProductById = (id) => {
    try {
        return ProductSchema.findOne({ _id: id }).populate('category');
    } catch (error) {
        return Promise.reject(error)
    }
}

dbHelper.getProductBySlug = (_slug) => {
    try {
        return ProductSchema.findOne({ slug: _slug }).populate('category');
    } catch (error) {
        return Promise.reject(error)
    }
}

dbHelper.getProductPhotoById = (id) => {
    try {
        return ProductSchema.findOne({ _id: id }).select({ photo: 1 }).populate('category').lean();
    } catch (error) {
        return Promise.reject(error)
    }
}

dbHelper.deleteproductById = (productId) => {
    try {
        return ProductSchema.deleteOne({ _id: productId });
    } catch (error) {
        return Promise.reject(error)
    }
}

module.exports = dbHelper;