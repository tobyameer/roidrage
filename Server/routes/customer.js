// routes/customer.js
const express = require("express");
const Customer = require("../models/Customer");
const { verifyToken, requireAdmin } = require("../middleware/auth");
const router = express.Router();

// Get all customers (admin only)
router.get("/", verifyToken, requireAdmin, async (req, res) => {
  const users = await Customer.find().select("-password");
  res.json(users);
});

// Update a customer (admin only)
router.put("/:id", verifyToken, requireAdmin, async (req, res) => {
  const updated = await Customer.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  }).select("-password");
  res.json(updated);
});

// Delete a customer (admin only)
router.delete("/:id", verifyToken, requireAdmin, async (req, res) => {
  await Customer.findByIdAndDelete(req.params.id);
  res.json({ message: "Customer deleted" });
});
