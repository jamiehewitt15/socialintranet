var mongoose = require( 'mongoose' );

var answerSchema = new mongoose.Schema({
    name: String,
    comment: String
});
var questionSchema = new mongoose.Schema({
        title: {type: String, required: true},
        text: {type: String, required: true},
        time: {type: String, required: true},
        //user: [userSchema],
        profilePic: {type: Buffer, contentType: String, "default": "http://localhost:3000/images/user-profile.png"},
        upVotes: {type: Number, "default": 0, min: 0},
        answered: {type: Boolean, "default": false},
        tags: [String]
    })

mongoose.model('questions', questionSchema);