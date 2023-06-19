const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stall = new Schema(
  {
    eventId: {
      type: Number,
    },
    marketId: {
      type: Number,
    },
    stallType: {
      type: String,
      trim: true,
    },
    stallImage: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    price: {
      type: Number,
    },
    isDelete: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Stall = mongoose.model("Stall", stall);

module.exports = { Stall };
