require("dotenv").config();
const {PORT,JWT_SECRET,basePort} = process.env;

module.exports = {
  PORT: PORT,
  JWT_SECRET:JWT_SECRET,
  basePort:basePort
};
