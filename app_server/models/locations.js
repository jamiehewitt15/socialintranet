var mongoose = require( "mongoose");

var siteSchema = new mongoose.Schema({
    title: {String, required: true},
    regions: [String],
    countries: [String],
    commodities: [String]
});

var pageSchema = new mongoose.Schema({
    title: {String, required: true},
    strapline: {String, required: true}
});

var postsSchema = new mongoose.Schema({
    title:  {String, required: true},
    subTitle:  {String, required: true},
    text:  {String, required: true},
    time: "Monday 10am",
    user: "Rachel Wanyoike",
    following: true,
    profilePic: "/images/user-profile.png",
    likes: 42,
    tags: ["East Africa", "Kenya", "Coffee", "Sustainablility"]
                                
});

var userSchema = new mongoose.Schema({
    fullName: {String, required: true},
    description: {type: String, "default": "New user"},
    followers: {type: Number, "default": 0, min: 0},
    following: {type: Number, "default": 0, min: 0},
    profilePic: {type: Buffer, "default": "/images/user-profile.png"},
    posts: {postsSchema}
});

