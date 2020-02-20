var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//The schema for our users collection
var userSchema = new Schema({
    //For this name parameter, we can can express rules aka validations to control 
    //the input for this field
    name: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 5,
    },
    email: String,
    bio: String,
})

//Now we convert Schema to a Model
//Each instance of this users model represents a single user
//Similar to a template
var User = mongoose.model('User', userSchema);
//Exporting the model below allows us to use this structure in outside folders
module.exports = User;