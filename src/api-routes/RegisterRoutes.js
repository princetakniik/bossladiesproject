const {
  register,
  registerAllData,
  registerOneData,
  registerUpdateData,
  registerDeleteData,
  updatePassword,
} = require("../Controller/RegisterController");

module.exports = (app) => {
  app.post("/register", (req, res) => register(req, res));
  app.get("/registerAllData", (req, res) => registerAllData(req, res));
  app.get("/registerOneData", (req, res) => registerOneData(req, res));
  app.put("/registerUpdateData", (req, res) => registerUpdateData(req, res));
  app.put("/updatePassword", (req, res) => updatePassword(req, res));
  app.delete("/registerDeleteData", (req, res) => registerDeleteData(req, res));
};
