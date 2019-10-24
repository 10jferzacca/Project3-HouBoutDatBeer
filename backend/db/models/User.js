const mongoose = require("../connection")
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name:String,
    email:String,
    username:String,
    password:String

})
// UserSchema.statics.findByCredentials = function(email, password, callback){
//     let User = this; 
//     User.findOne({email: email, password:password}, callback);
        
// }
const User = mongoose.model("User",UserSchema)
module.exports = User