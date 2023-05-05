const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const emailveryfi = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      unique: true,
    },
    otp: { type: Number, trim: true},
    isDelete: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Emailveryfi = mongoose.model("Emailveryfi", emailveryfi);

module.exports = { Emailveryfi };
