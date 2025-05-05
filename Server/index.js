const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

// Import your product routes here
const productRoutes = require("./routes/product");

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your frontend URL
    credentials: true, // Allow cookies and credentials
  })
);
app.use(express.json());

// Routes
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

app.use("/uploads", express.static("uploads"));

const orderRoutes = require("./routes/order");
app.use("/api", orderRoutes);

const seedAdminRoute = require("./routes/seedAdmin");
app.use("/api/seed", seedAdminRoute);

const privateRoutes = require("./routes/private");
app.use("/api", privateRoutes);

// Add the product routes here
app.use("/api/products", productRoutes); // This line is crucial for handling the /api/products endpoint

// Root Route
app.get("/", (req, res) => {
  res.send("Hello from backend");
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("MongoDB error:", err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
