module.exports=(app)=>{
    require('./src/api-routes/RegisterRoutes')(app);
    require('./src/api-routes/LoginRoutes')(app);
    require('./src/api-routes/verifyJwtRouter')(app);
    require('./src/api-routes/sendMailRoutes')(app);
}