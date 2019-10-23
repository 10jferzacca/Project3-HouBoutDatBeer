const mongoose = require("mongoose")
let mongoURI = ""
if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
  } else {
    mongoURI = "mongodb://localhost/HouBoutDatBeer";
  }
mongoose.connect("mongodb://localhost/HouBoutDatBeer", {useNewUrlParser:true}, ()=>{console.log("we are connected")})
mongoose.Promise= Promise
module.exports = mongoose;