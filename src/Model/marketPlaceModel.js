const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const marketPlace = new Schema(
  {
    marketPlaceImage: {
      type: String,
      trim: true,
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
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      unique: true,
    },

    isDelete: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const MarketPlace = mongoose.model("MarketPlace", marketPlace);

module.exports = { MarketPlace };
