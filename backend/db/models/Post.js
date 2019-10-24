  
const mongoose = require("../connection")
const Schema = mongoose.Schema

const PostSchema = new Schema({
    title:String,
    caption:String,
    picture:String,
    brewery:String,
    longitude: String,
    latitude: String,
    category:String,
    user:{type: Schema.Types.ObjectId, ref: "User", required:true}
})

// return all posts for a certain user
//posts.find({user:req.params.user_id})

const Post = mongoose.model("Post",PostSchema)
module.exports = Post