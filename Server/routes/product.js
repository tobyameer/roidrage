// routes/product.js

const express = require("express");
const Product = require("../models/Product");
const multer = require("multer");
const { verifyToken, verifyAdmin } = require("../middleware/authMiddleware");

const router = express.Router();

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Save files to 'uploads' directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname); // Ensure unique filenames
  },
});

const upload = multer({ storage });

// Fetch all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch products" });
  }
});

// Add new product (with image upload)
router.post(
  "/",
  verifyToken,
  verifyAdmin,
  upload.single("image"),
  async (req, res) => {
    try {
      const { name, price, description, quantity, category } = req.body;
      const image = req.file ? `/uploads/${req.file.filename}` : null;

      const newProduct = new Product({
        name,
        price,
        description,
        quantity,
        category,
        image,
      });

      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Failed to create product" });
    }
  }
);

// Delete a customer (admin only)

module.exports = router;
