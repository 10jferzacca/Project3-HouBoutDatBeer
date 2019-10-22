  
const post = require("./posts.json");
const user = require("./user.json");

const Post = require("./models/Post");
const User = require("./models/User");

Post.deleteMany({}).then(() => {
  Post.insertMany(post).then(() => {
    User.deleteMany({}).then(() => {
      User.insertMany(user).then(() => process.exit());
    });
  });
});