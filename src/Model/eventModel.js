const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const event = new Schema(
  {
    marketId: {
      type: Number,
    },
    eventImage: {
      type: String,
      trim: true,
    },
    date: {
      type: Date,
    },
    time: {},
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    address: {
      type: String,
      trim: true,
    },
    city: {
      type: String,
      trim: true,
    },
    state: {
      type: String,
      trim: true,
    },
    country: {
      type: String,
      trim: true,
    },
    zipCode: { type: Number },
    isDelete: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Event = mongoose.model("Event", event);

module.exports = { Event };
