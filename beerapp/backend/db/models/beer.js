const mongoose = require('../connection');

const beer = new mongoose.Schema({
    id:Number,
    name:String,
    description:String
})

const beerModel = mongoose.model('beer', beer);

module.exports = beerModell;