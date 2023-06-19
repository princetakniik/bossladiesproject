const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSeat = new Schema(
  {
    eventId: {
      type: String,
    },
    marketId: {
      type: String,
    },
    userId: {
      type: String,
    },
    seatId: {
      type: String,
    },
    isDelete: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const UserSeat = mongoose.model("UserSeat", userSeat);

module.exports = { UserSeat };
