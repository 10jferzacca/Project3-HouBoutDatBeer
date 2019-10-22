const express = require("express")
const router = express.Router()
const User = require("../db/models/User")



router.post("/", (req,res) => {
    User.create(req.body).then(user => {
        res.send("/")
    }).catch(err => {
        console.log("error", err)
    })
})

// router.get("/:id", (req,res) => {
//     User.findOne({_id:req.params.id}).then(user => {
//         res.status(200).send({success: true, user:user})
//     }).catch(err => {
//         console.log("error", err)
//     })
// })

router.get("/", (req, res) => {
    User.find({}).then(users => res.json(users));
})

router.put("/:id", (req,res) => {
    User.findOneAndUpdate({_id:req.params.id},req.body).then(user => {
        res.status(200).send({success: true, user:user})
    }).catch(err => {
        console.log("error", err)
    })
})

router.delete("/:id", (req,res) => {
    User.findOneAndDelete({_id:req.params.id}).then( () => {
        res.status(200).send({success: true, deleted:true})
    }).catch(err => {
        console.log("error", err)
    })
})

module.exports = router 