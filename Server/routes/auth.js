const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Customer = require("../models/Customer");
const router = express.Router();

// ==========================
// SIGNUP Route
// ==========================
router.post("/signup", async (req, res) => {
  const { firstName, lastName, email, password, role } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const existingUser = await Customer.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newCustomer = new Customer({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role: role || "customer", // Default to "customer" if no role is provided
    });

    await newCustomer.save();

    const token = jwt.sign(
      { id: newCustomer._id, email: newCustomer.email, role: newCustomer.role }, // Include the role
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(201).json({
      message: "User created successfully",
      token,
      user: {
        firstName: newCustomer.firstName,
        lastName: newCustomer.lastName,
        email: newCustomer.email,
        role: newCustomer.role, // Include role here as well
      },
    });
  } catch (err) {
    res.status(500).json({ message: err.message }); // ✅ Consistent error key
  }
});

// ==========================
// LOGIN Route
// ==========================
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // ✅ Validate input
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const customer = await Customer.findOne({ email });
    if (!customer) {
      return res.status(400).json({ message: "Invalid email or password." });
    }

    const isMatch = await bcrypt.compare(password, customer.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password." });
    }

    // ✅ Create token with role included
    const token = jwt.sign(
      { id: customer._id, email: customer.email, role: customer.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // ✅ Send role back in user object
    res.status(200).json({
      token,
      user: {
        firstName: customer.firstName,
        lastName: customer.lastName,
        email: customer.email,
        role: customer.role, // 👈 send this
      },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
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
