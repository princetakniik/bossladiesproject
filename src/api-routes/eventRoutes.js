const {
  insertEvent,
  getAllEvent,
  getEventById,
  updateEventById,
  deleteEventData,
} = require("../Controller/eventController");

module.exports = (app) => {
  app.post("/insertEvent", (req, res) => insertEvent(req, res));
  app.get("/getAllEvent", (req, res) => getAllEvent(req, res));
  app.get("/getEventById", (req, res) => getEventById(req, res));
  app.put("/updateEventById", (req, res) => updateEventById(req, res));
  app.delete("/deleteEventData", (req, res) => deleteEventData(req,res));
};
