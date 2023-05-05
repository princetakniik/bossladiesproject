const { sendMail } = require("../Middleware/nodeMailer");

module.exports = (app) => {
  app.get("/sendMail", (req, res) => sendMail(req, res));
};
