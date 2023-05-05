const { loginUser } = require("../Controller/LoginController");

module.exports = (app) => {
  app.post("/loginUser", (req, res) => loginUser(req, res));
};
