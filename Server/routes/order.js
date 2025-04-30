// routes/order.js
const express = require("express");
const Order = require("../models/Order");
const Product = require("../models/Product");
const verifyToken = require("../middleware/authMiddleware"); // assuming you have this middleware
const router = express.Router();

// ==========================
// Create Order Route
// ==========================
router.post("/orders", verifyToken, async (req, res) => {
  const { products } = req.body; // Array of product IDs and quantities
  const customerId = req.user.id;

  try {
    let totalAmount = 0;

    // Create a new order
    const order = new Order({
      customerId,
      orderDate: new Date(),
      totalAmount: 0, // We'll update the total later
      orderItems: [],
    });

    // Loop through the products in the order, calculate the total amount, and save order items
    for (let item of products) {
      const product = await Product.findById(item.productId);
      if (!product) {
        return res
          .status(400)
          .json({ message: `Product ${item.productId} not found` });
      }

      totalAmount += product.price * item.quantity;

      const orderItem = {
        productId: product._id,
        quantity: item.quantity,
        priceEach: product.price,
      };

      order.orderItems.push(orderItem);
    }

    // Update the total amount of the order
    order.totalAmount = totalAmount;

    // Save the order to the database
    await order.save();

    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ==========================
// Get All Orders (Admin Only)
// ==========================
router.get("/orders", verifyToken, verifyAdmin, async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("customerId")
      .populate("orderItems.productId");
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ==========================
// Get Orders by Customer (Customer Only)
// ==========================
router.get("/orders/my", verifyToken, async (req, res) => {
  try {
    const orders = await Order.find({ customerId: req.user.id }).populate(
      "orderItems.productId"
    );
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
