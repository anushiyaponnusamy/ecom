
const Mongoose = require('mongoose');
const productSchema = new Mongoose.Schema({
  slug: {
    type: String,
    lowercase: true
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  photo: {
    type: String,

  },
  category: {
    type: Mongoose.Schema.Types.ObjectId, // Reference to ObjectId
    ref: 'category', // Reference to the Category model
    required: true
  },
  shipping: {
    type: String,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  modifiedDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Mongoose.model('product', productSchema);
