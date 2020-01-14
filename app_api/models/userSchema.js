var mongoose = require( "mongoose");

var userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, "default": "New user"},
    // password: {type: String, required: true},
    followers: {type: Number, "default": 0, min: 0},
    following: {type: Number, "default": 0, min: 0},
    profilePic: {type: Buffer, "default": "/images/user-profile.png"},
    news:[newsSchema]
});

// var newsSchema = new mongoose.Schema({
//     title:  {type: String, required: true},
//     subTitle:  {type: String, required: true},
//     text:  {type: String, required: true},
//     time: String,
//     user: {type: String, required: true},
//     following: Boolean,
//     profilePic: Buffer,
//     upVote: {type: Number, "default": 0, min: 0},
//     // tags: [String]
                                
// });


mongoose.model('users', userSchema);

