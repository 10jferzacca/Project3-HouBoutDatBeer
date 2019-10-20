const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/HouBoutDatBeer", {useNewUrlParser:true}, ()=>{console.log("we are connected")})
mongoose.Promise= Promise
module.exports = mongoose;