var mongoose = require( "mongoose");

var pageSchema = new mongoose.Schema({
     title: {String, required: true},
     strapline: {String, required: true}
 });

var postsSchema = new mongoose.Schema({
    title:  {String, required: true},
    subTitle:  {String, required: true},
    text:  {String, required: true},
    time: String,
    user: String,
    following: true,
    profilePic: Buffer,
    likes: {type: Number, "default": 0, min: 0},
    tags: [String]
                                
});

var userSchema = new mongoose.Schema({
    fullName: {String, required: true},
    description: {type: String, "default": "New user"},
    followers: {type: Number, "default": 0, min: 0},
    following: {type: Number, "default": 0, min: 0},
    profilePic: {type: Buffer, "default": "/images/user-profile.png"},
    posts:[postsSchema]
});

var siteSchema = new mongoose.Schema({
    title: {String, required: true},
    regions: [String],
    countries: [String],
    commodities: [String],
    users: [userSchema],
    pages: [pageSchema],    
    posts:[postsSchema]
});

mongoose.model('Intranet', siteSchema);

