const mongoose = require("../connection")
const Schema = mongoose.Schema

const PostSchema = new Schema({
    title:String,
    caption:String,
    picture:String,
    brewery:String,
    category:String,
    user:{type: Schema.Types.ObjectId, ref: "User"}
})

const Post = mongoose.model("Post",PostSchema)
module.exports = Post

