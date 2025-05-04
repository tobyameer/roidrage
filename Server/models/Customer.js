// models/Customer.js
const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      index: true, // <-- speeds up findOne()
    },
    password: { type: String, required: true },
    phoneNumber: { type: String },
    role: { type: String, default: "customer", enum: ["customer", "admin"] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Customer", CustomerSchema);
