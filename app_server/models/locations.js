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
    user: {String, required: true},
    following: Boolean,
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

var questionsSchema = new mongoose.Schema({
    title: {String, required: true},
    text: {String, required: true},
    time: {String, required: true},
    user: [userSchema],
    profilePic: {type: Buffer, "default": "/images/user-profile.png"},
    upVotes: {type: Number, "default": 0, min: 0},
    answered: {Boolean, "default": false},
    tags: [String]
})

var chatSchema = new mongoose.Schema({
    groups: [String],
    recentContacts: [String],
    names: [String],
//  mesages: [messagesSchema]
})

mongoose.model('Intranet', siteSchema);

