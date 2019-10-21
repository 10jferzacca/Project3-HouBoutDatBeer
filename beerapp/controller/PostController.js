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

// router.put

// router.delete



