const router = require('express').Router();
//Bring in the User model
const Tweet = require('../models/tweets.model.js');

//Get all tweets as json object
router.route('/').get((req, res) => {
    Tweet.find()
        .then(tweets => res.json(tweets))
        .catch(err => res.status(400).json(err));
})

//Add a tweet 
router.route('/add').post((req,res) => {
    const userId = req.body.userId;
    const text = req.body.text;
    const date = req.body.date;

    const newTweet = new Tweet({
        userId, text, date
    });

    newTweet.save()
        .then(() => res.json("Tweet Added."))
        .catch(err => err.status(400).json(err));
});

//Obtain a specific tweet
router.route('/:id').get((req, res) => {
    //Obtain the id in the route
    Tweet.findById(userId)
        //Return to client
        .then(tweet => res.json(user))
        .catch(err => res.status(400).json(err));
});

module.exports = router;