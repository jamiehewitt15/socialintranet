var mongoose = require( "mongoose");

var pageSchema = new mongoose.Schema({
     title: {type: String, required: true},
     strapline: {type: String, required: true}
 });

var newsSchema = new mongoose.Schema({
    title:  {type: String, required: true},
    subTitle:  {type: String},
    text:  {type: String, required: true},
    time: String,
    user: {type: String},
    following: Boolean,
    profilePic: Buffer,
    likes: {type: Number, "default": 0, min: 0},
    tags: [String],
    regionTag: String,
    countryTag: String,
    commodityTag: String,
    report: {type: Boolean, "default": false},
    favourite: {type: Boolean, "default": false}        
},
{timestamps: true}
);

// var userSchema = new mongoose.Schema({
//     name: {type: String, required: true},
//     description: {type: String, "default": "New user"},
//     followers: {type: Number, "default": 0, min: 0},
//     following: {type: Number, "default": 0, min: 0},
//     profilePic: {type: Buffer, "default": "/images/user-profile.png"},
//     news:[newsSchema]
// });

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


