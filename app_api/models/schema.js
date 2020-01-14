var mongoose = require( "mongoose");

var pageSchema = new mongoose.Schema({
     title: {type: String, required: true},
     strapline: {type: String, required: true}
 });

var newsSchema = new mongoose.Schema({
    title:  {type: String, required: true},
    subTitle:  {type: String, required: true},
    text:  {type: String, required: true},
    time: String,
    user: {type: String, required: true},
    following: Boolean,
    profilePic: Buffer,
    likes: {type: Number, "default": 0, min: 0},
    tags: [String]
                                
});

// var userSchema = new mongoose.Schema({
//     name: {type: String, required: true},
//     description: {type: String, "default": "New user"},
//     followers: {type: Number, "default": 0, min: 0},
//     following: {type: Number, "default": 0, min: 0},
//     profilePic: {type: Buffer, "default": "/images/user-profile.png"},
//     news:[newsSchema]
// });

// var questionsSchema = new mongoose.Schema({
//     title: {type: String, required: true},
//     text: {type: String, required: true},
//     time: {type: String, required: true},
//     user: [userSchema],
//     profilePic: {type: Buffer, "default": "/images/user-profile.png"},
//     upVotes: {type: Number, "default": 0, min: 0},
//     answered: {type: Boolean, "default": false},
//     tags: [String]
// })

// var chatSchema = new mongoose.Schema({
//     groups: [String],
//     recentContacts: [String],
//     names: [String],
// //  mesages: [messagesSchema]
// })

// var siteSchema = new mongoose.Schema({
//     title: {type: String, required: true},
//     regions: [String],
//     countries: [String],
//     commodities: [String],
//     users: [userSchema],
//     pages: [pageSchema],    
//     news:[newsSchema]
// });

mongoose.model('news', newsSchema);


