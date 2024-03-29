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
        // .redirect("/")
    }).catch(err => {
        console.log("error", err)
    })
})

router.put('/edit/:id', (req, res) => {
   console.log('router put')
   console.log(req.body)
    Post.
    findOneAndUpdate({_id: req.params.id}, req.body)
    .then(post => {
       res.json(post)
    })
  
    .catch(err => {
        console.log(err)
    })
})




router.get("/", (req, res) => {
    Post.find({}).then(posts => res.json(posts));
})
router.get("/:uid", (req, res) => {
    Post.find({user: req.params.uid}).populate("user").then(posts => res.json(posts));
})

module.exports = router

// router.put

// router.delete

