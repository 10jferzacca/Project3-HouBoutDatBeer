const mongoose = require("../connection")
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name:String,
    email:String,
    username:String

})

const User = mongoose.model("User",UserSchema)
module.exports = User