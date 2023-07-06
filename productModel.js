const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  photo: {
    type: String,
    required: false
  },
  code: {
    type: String,
    required: false,
    unique: false
  },
  stock: {
    type: Number,
    required: false
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
