// routes/seedAdmin.js

const express = require("express");
const bcrypt = require("bcryptjs");
const Customer = require("../models/Customer");

const router = express.Router();

// Route to create an admin
router.post("/create-admin", async (req, res) => {
  try {
    // Optional: Validate that required fields exist (email, password)
    const { email = "admin@roidrage.com", password = "AdminPass123" } =
      req.body;

    // Check if the admin already exists
    const existing = await Customer.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new admin
    const admin = new Customer({
      firstName: "Admin",
      lastName: "User",
      email,
      password: hashedPassword,
      role: "admin", // Ensure 'role' exists in your Customer schema
    });

    // Save the admin
    await admin.save();

    res.status(201).json({ message: "Admin created", email: admin.email });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
