const router = require('express').Router();
//Bring in the User model
const User = require('../models/user.model.js');

/*
@route POST /users/
@desc Gets all users
@access Public
*/
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json(err))
});

//Add a user
router.route('/add').post((req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const bio = req.body.bio;

    const newUser = new User({
        name, email, bio
    });

    newUser.save()
        .then(() => res.json("User Added."))
        .catch(err => err.status(400).json(err));
});

//Obtaining a user from the database
//EX FORMAT: localhost:5000/users/1414141341    ... etc.
/*
@route /users/:id
@desc Get a specified user
@access Public
*/
router.route('/:id').get((req,res) => {
    //get the id in the actual route
    const userID = req.params.id;
    User.findById(userID)
        //send the user back to client side
        .then(user => res.json(user))
        .catch(err => res.status(400).json(err));
})


module.exports = router;


/*
// Grabs data from the server
router.route('/').get((req, res) => {
    res.send('<h1>User Request</h1>');
});
// Sends data to the server
router.route('/add').post((req, res) => {
    // get the name from the form request
    const name = req.body.name;
    // send an h1 element introducing the user
    res.send('<h1>Hi, my name is ' + name + '</h1>')
});
module.exports = router;
*/