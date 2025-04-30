const mongoose = require("mongoose");

const OrderItemSchema = new mongoose.Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: "Order", required: true },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: { type: Number, required: true },
  priceEach: { type: Number, required: true },
});

module.exports = mongoose.model("OrderItem", OrderItemSchema);
