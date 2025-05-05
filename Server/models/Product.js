// models/Product.js

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  category: { type: String, required: true },
  image: { type: String }, // Stores the image path (relative URL)
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
