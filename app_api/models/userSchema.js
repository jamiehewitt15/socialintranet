var mongoose = require( "mongoose");

var userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, "default": "New user"},
    followers: {type: Number, "default": 0, min: 0},
    following: {type: Number, "default": 0, min: 0},
    profilePic: {type: Buffer, "default": "/images/user-profile.png"},
    // news:[newsSchema]
});

mongoose.model('users', userSchema);