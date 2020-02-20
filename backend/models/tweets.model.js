var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tweetSchema = new Schema({
    userId: String,
    text: String,
    createdAt: String,
});

var Tweet = mongoose.model('Tweet', tweetSchema);
module.exports = Tweet;
