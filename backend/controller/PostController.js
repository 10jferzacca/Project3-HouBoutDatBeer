const express = require("express")
const router = express.Router()
const Post = require("../db/models/Post")


router.delete("/:id", (req, res) => {
    Post.findOneAndDelete({_id: req.params.id}).then(() => {
        res.redirect('/posts')
    })
    })
   

router.post("/", (req,res) => {
    Post.create(req.body).then(post => {
        res.status(200).send({success: true, post:post})
    }).catch(err => {
        console.log("error", err)
    })
})

router.put('/edit/:id', (req, res) => {
    Post.
    findOneAndUpdate({_id: req.params.id}, req.body)
    .then(post => {
        post.json()
    })
    .catch(err => {
        console.log(err)
    })
})

// router.get("/", (req,res) => {
//     Post.find({}).then(posts => {
//         res.status(200).send({success: true, posts:posts})
//     }).catch(err => {
//         console.log("error", err)
//     })
// })

router.get('/edit/:id', (req, res) => {
    Post.findOne({_id: req.params.id}).then(post => {
        res.json(post)
    })
})
router.get("/", (req, res) => {
    Post.find({}).then(posts => res.json(posts));
})

module.exports = router

// router.put

// router.delete

