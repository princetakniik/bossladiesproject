const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const seat = new Schema(
  { 
    eventId: {
      type: Number,
    },
    marketId: {
      type: Number,
    },
    seatType: {
      type: String,
      trim: true,
    },
    seatImage: {
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

const Seat = mongoose.model("Seat", seat);

module.exports = { Seat };
