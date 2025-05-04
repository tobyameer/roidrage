const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Customer = require("../models/Customer");
const router = express.Router();

// ==========================
// SIGNUP Route
// ==========================
router.post("/signup", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await Customer.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save new customer
    const newCustomer = new Customer({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    await newCustomer.save();

    // ✅ Generate JWT
    const token = jwt.sign({ id: newCustomer._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // ✅ Return token and user info
    res.status(201).json({
      message: "User created successfully",
      token,
      user: {
        firstName: newCustomer.firstName,
        lastName: newCustomer.lastName,
        email: newCustomer.email,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ==========================
// LOGIN Route
// ==========================
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const customer = await Customer.findOne({ email });
    if (!customer)
      return res.status(400).json({ message: "Invalid credentials" });

    // Compare passwords
    const isMatch = await bcrypt.compare(password, customer.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    // Generate JWT
    const token = jwt.sign({ id: customer._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({
      token,
      user: {
        firstName: customer.firstName,
        lastName: customer.lastName,
        email: customer.email,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ==========================
// LOGOUT Route
// ==========================
router.post("/logout", (req, res) => {
  // In JWT, logout = delete token on client
  res.status(200).json({ message: "Logged out" });
});

module.exports = router;
