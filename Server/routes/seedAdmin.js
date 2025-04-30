// routes/seedAdmin.js

const express = require("express");
const bcrypt = require("bcryptjs");
const Customer = require("../models/Customer");

const router = express.Router();

router.post("/create-admin", async (req, res) => {
  try {
    const existing = await Customer.findOne({ email: "admin@roidrage.com" });
    if (existing) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    const hashedPassword = await bcrypt.hash("AdminPass123", 10);

    const admin = new Customer({
      firstName: "Admin",
      lastName: "User",
      email: "admin@roidrage.com",
      password: hashedPassword,
      role: "admin", // make sure 'role' is a valid field in your Customer schema
    });

    await admin.save();

    res.status(201).json({ message: "Admin created", email: admin.email });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
