const mongoose = require('mongoose');

const {Register} = require('../Model/RegisterModel')
const mongooseConnection = async() => {
    await mongoose
    .connect("mongodb://127.0.0.1:27017/BossLadies", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Successfully connected to the database");
    })
    .catch((err) => {
      console.log("Could not connect to the database. Exiting now...", err);
  
    });
};

module.exports = {
  mongooseConnection
};