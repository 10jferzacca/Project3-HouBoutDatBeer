const post = require("/beerdata.json");
const user = require("/beerdata.json");

const Post = require("/models/Post");
const User = require("/models/User");

Post.deleteMany({}).then(() => {
  Post.insertMany(post).then(() => {
    User.deleteMany({}).then(() => {
      User.insertMany(user).then(() => process.exit());
    });
  });
});