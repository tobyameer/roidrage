// routes/product.js
const express = require("express");
const Product = require("../models/Product");
const { verifyToken, requireAdmin } = require("../middleware/auth");
const router = express.Router();

// Create product (admin only)
router.post("/", verifyToken, requireAdmin, async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.status(201).json(product);
});

// Update product (admin only)
router.put("/:id", verifyToken, requireAdmin, async (req, res) => {
  const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
});

// Delete product (admin only)
router.delete("/:id", verifyToken, requireAdmin, async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
});

// Get all products
router.get("/", async (req, res) => {
  const products = await Product.find().populate("category");
  res.json(products);
});

// ✅ Get products by category ID
router.get("/category/:categoryId", async (req, res) => {
  const products = await Product.find({ category: req.params.categoryId });
  res.json(products);
});

module.exports = router;
