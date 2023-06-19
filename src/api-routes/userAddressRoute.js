const {
  userDetails,
  getUserAll,
  getDataById,
  getActiveUser,
  getAllmembership,
  updateuserdetails,
  getInactiveUser,
  updateActive,
  deleteUser,
} = require("../Controller/userAddressController");

module.exports = (app) => {
  app.post("/userDetails", (req, res) => userDetails(req, res));
  app.get("/getUserAll", (req, res) => getUserAll(req, res));
  app.get("/getDataById", (req, res) => getDataById(req, res));
  app.get("/getAllmembership", (req, res) => getAllmembership(req, res));
  app.get("/getActiveUser", (req, res) => getActiveUser(req, res));
  app.get("/getInactiveUser", (req, res) => getInactiveUser(req, res));
  app.put("/updateuserdetails", (req, res) => updateuserdetails(req, res));
  app.put("/updateActive", (req, res) => updateActive(req, res));
  app.delete("/deleteUser", (req, res) => deleteUser(req, res));
};
