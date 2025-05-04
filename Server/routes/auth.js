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
    });

    await newCustomer.save();

    const token = jwt.sign({ id: newCustomer._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

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
    res.status(500).json({ message: err.message }); // ✅ Consistent error key
  }
});

// ==========================
// LOGIN Route
// ==========================
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // ✅ Check for missing fields
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const customer = await Customer.findOne({ email });
    if (!customer) {
      return res.status(400).json({ message: "invalid email or password." });
    }

    const isMatch = await bcrypt.compare(password, customer.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

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
    res.status(500).json({ message: err.message }); // ✅ Use `message` key
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
