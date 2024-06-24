const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  // other fields as needed
});

module.exports = mongoose.model('Product', ProductSchema);
