const { verifyJwt } = require("../Controller/VeryfiJwtController")

module.exports =(app)=>{
    app.get('/verifyJwt',(req,res)=>verifyJwt(req,res));
}