const express = require("express")
const router = express.Router() 
const User = require("../db/models/User") 

// const passport = require("passport");
// const LocalStrategy = require("passport-local").Strategy;


router.get("/", (req,res) =>{
    res.render("login")
})

router.post("/",  (req,res)  =>{
    console.log("user", req.body)
    if(req.body){
      console.log("login successful");
      //next();
    }
    User.findOne(req.body).then(user => {
        if (!user){
            console.log("user does not exist")
            res.status(401).send("failed to login")
        }else {
            let token = Math.random().toString(36).substring(2,9)
            console.log(token)
            console.log("user", user)
            res.status(200).send({
                success: true,
                user:user,
                token:token
            });
        }
        
    })
})
module.exports = router;