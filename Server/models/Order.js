// models/Order.js
const mongoose = require("mongoose");

const OrderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product", // Link to the Product model
    required: true,
  },
  quantity: { type: Number, required: true },
  priceEach: { type: Number, required: true },
});

const OrderSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer", // Link to the Customer model
    required: true,
  },
  orderDate: { type: Date, default: Date.now },
  totalAmount: { type: Number, required: true },
  orderItems: [OrderItemSchema], // This will store the order items as an array
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
