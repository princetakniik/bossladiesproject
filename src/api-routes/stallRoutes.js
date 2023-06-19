const {
  insertStall,
  getAllStall,
  getStallById,
  updateStallById,
  deleteStallData,
} = require("../Controller/stallController");

module.exports = (app) => {
  app.post("/insertStall", (req, res) => insertStall(req, res));
  app.get("/getAllStall", (req, res) => getAllStall(req, res));
  app.get("/getStallById", (req, res) => getStallById(req, res));
  app.put("/updateStallById", (req, res) => updateStallById(req, res));
  app.delete("/deleteStallData", (req, res) => deleteStallData(req, res));
};
