const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const register = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: [true, "Username is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      unique: true,
    },
    phone: { type: Number, trim: true, unique: true },
    password: {
      type: String,
      trim: true,
      required: [true, "Password is required"],
    },
    token: {
      type: String,
      trim: true,
    },
    isDelete: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Register = mongoose.model("Register", register);

module.exports = { Register };
