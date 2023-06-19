const {
  insertSeat,
  getAllSeat,
  getSeatById,
  updateSeatById,
  deleteSeatData,
} = require("../Controller/seatController");

module.exports = (app) => {
  app.post("/insertSeat", (req, res) => insertSeat(req, res));
  app.get("/getAllSeat", (req, res) => getAllSeat(req, res));
  app.get("/getSeatById", (req, res) => getSeatById(req, res));
  app.put("/updateSeatById", (req, res) => updateSeatById(req, res));
  app.delete("/deleteSeatData", (req, res) => deleteSeatData(req, res));
};
