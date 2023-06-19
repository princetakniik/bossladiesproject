module.exports = (app) => {
  require("./src/api-routes/RegisterRoutes")(app);
  require("./src/api-routes/LoginRoutes")(app);
  require("./src/api-routes/verifyJwtRouter")(app);
  require("./src/api-routes/sendMailRoutes")(app);
  require("./src/api-routes/userAddressRoute")(app);
  require("./src/api-routes/blogRoutes")(app);
  require("./src/api-routes/marketPlaceRouter")(app);
  require("./src/api-routes/eventRoutes")(app);
  require("./src/api-routes/stallRoutes")(app);
  require("./src/api-routes/seatRoutes")(app);
  require("./src/api-routes/userSeatRoutes")(app);
  require("./src/api-routes/userStallRoutes")(app);
};
