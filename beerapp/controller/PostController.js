const express = require("express")
const router = express.Router()
const Post = require("../db/models/Post")

router.post("/", (req,res) => {
    Post.create(req.body).then(post => {
        res.status(200).send({success: true, post:post})
    }).catch(err => {
        console.log("error", err)
    })
})

// router.get("/", (req,res) => {
//     Post.find({}).then(posts => {
//         res.status(200).send({success: true, posts:posts})
//     }).catch(err => {
//         console.log("error", err)
//     })
// })

router.get("/", (req, res) => {
    Post.find({}).then(posts => res.json(posts));
})

module.exports = router

router.put("/", (req,res) => {
    Post.findOneAndUpdate({
        _id: req.params.id
    }, req.body).then(posts => {
        res.redirect("/")
    })
    .catch(err=>{
        console.log("err", err)
    }) 
     
})
// make sure :id is passed into http call on the front end, have it exposed on req.params.id

router.delete("/:id", (req, res) => {
    console.log("DELETE DELETE DELETE")
    Post.findOneAndDelete({
        _id: req.params.id
    }).then(() => {
        res.redirect("/");
    })
    .catch(err=>{
        console.log("err", err)
    }) 
})



