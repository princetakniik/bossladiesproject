const {
  insertUserSeat,
  getAllUserSeat,
  UserSeatById,
  updateUserSeat,
  deleteUserSeat,
} = require("../Controller/userSeatController");

module.exports = (app) => {
  app.post("/insertUserSeat", (req, res) => insertUserSeat(req, res));
  app.get("/getAllUserSeat", (req, res) => getAllUserSeat(req, res));
  app.get("/UserSeatById", (req, res) => UserSeatById(req, res));
  app.put("/updateUserSeat", (req, res) => updateUserSeat(req, res));
  app.delete("/deleteUserSeat", (req, res) => deleteUserSeat(req, res));
};
