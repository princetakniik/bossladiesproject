const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userAddress = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      unique: true,
    },
    startDate: { type: Date },
    endDate: { type: Date },
    address: {
      type: String,
      trim: true,
    },
    Additional: {
      type: String,
    },
    zipCode: { type: Number },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    country: {
      type: String,
    },
    isDelete: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const UserAddress = mongoose.model("UserAddress", userAddress);

module.exports = { UserAddress };
