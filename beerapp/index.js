const express = require("express")
const connection = require("./db/connection")
const app = express()
const parser = require("body-parser")
const UserController = require("./controller/UserController")
const PostController = require("./controller/PostController")
const cors = require("cors")



app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({extended:true}));
app.use("/users", UserController);
app.use("/posts", PostController);
app.get("/",(req,res)=> {
    res.status(200).send("connected")
});

app.listen (3000, () =>{console.log("we connected to port 3000")});