const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userStall = new Schema(
  { 
    eventId: {
      type: String,
    },
    marketId: {
      type: String,
    },
  userId:{
    type: String,
  },
   stallId:{
    type: String,
   },
    isDelete: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const UserStall = mongoose.model("UserStall", userStall);

module.exports = { UserStall };
