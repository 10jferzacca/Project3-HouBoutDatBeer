const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/HouBoutDatBeer", {useNewUrlParser:true}, ()=>{console.log("we are connected")})
mongoose.Promise= Promise
// if (process.env.NODE_ENV === "production") 
//     {mongoURI = process.env.DB_URL;
//     } else {mongoURI = "mongodb://localhost/HouBoutDatBeer";}

// mongoose.connect(mongoURI, {
//     useNewUrlParser: true})
//     .then(()=>{
//         console.log("mongoose connected")
//     })
//     .catch(err => {
//         console.log("error", err)
//     })

module.exports = mongoose;