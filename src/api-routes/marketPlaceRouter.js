const {
  insertMarketPlace,
  getAllMarketPlace,
  getMarketPlaceById,
  updateMarketPlaceById,
  deleteMarketPlaceById,
} = require("../Controller/marketPlaceController");

module.exports = (app) => {
  app.post("/insertMarketPlace", (req, res) => insertMarketPlace(req, res));
  app.get("/getAllMarketPlace", (req, res) => getAllMarketPlace(req, res));
  app.get("/getMarketPlaceById", (req, res) => getMarketPlaceById(req, res));
  app.put("/updateMarketPlaceById", (req, res) =>
    updateMarketPlaceById(req, res)
  );
  app.delete("/deleteMarketPlaceById", (req, res) =>
    deleteMarketPlaceById(req, res)
  );
};
