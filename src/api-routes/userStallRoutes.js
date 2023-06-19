const {
  insertUserStall,
  getAllUserStall,
  UserStallById,
  updateUserStall,
  deleteUserStall,
} = require("../Controller/userStallController");

module.exports = (app) => {
  app.post("/insertUserStall", (req, res) => insertUserStall(req, res));
  app.get("/getAllUserStall", (req, res) => getAllUserStall(req, res));
  app.get("/UserStallById", (req, res) => UserStallById(req, res));
  app.put("/updateUserStall", (req, res) => updateUserStall(req, res));
  app.delete("/deleteUserStall", (req, res) => deleteUserStall(req, res));
};
