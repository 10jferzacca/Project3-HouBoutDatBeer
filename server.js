const express = require("express")
const connection = require("./backend/db/connection")
const app = express()
const cors = require('cors')
const parser = require("body-parser")

const UserController = require('./backend/controller/UserController')
const PostController = require("./backend/controller/PostController")

// app.use(express.static(path.join(__dirname, 'public')))
app.use(cors())
app.use(parser.json())
app.use(parser.urlencoded({extended:true}))
app.use("/users", UserController)
app.use("/posts", PostController)
app.get("/",(req,res)=> {
    res.status(200).send("connected")
});



app.listen (3000, () =>{console.log("we connected to port 3000")})
