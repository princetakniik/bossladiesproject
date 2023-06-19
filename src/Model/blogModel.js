const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogs = new Schema(
  { 
    userBlog: {
      type: String,
      trim: true,
    },
    userBlogImage:{
        type: String,
        trim: true,
    },
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

const Blogs = mongoose.model("Blogs", blogs);

module.exports = { Blogs };
