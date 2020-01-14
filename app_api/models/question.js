var mongoose = require( 'mongoose' );

var answerSchema = new mongoose.Schema({
    name: String,
    comment: String
});

var fixSchema = new mongoose.Schema({
    name: String,
    status: String,
    summary: String,
    skills: [String],
    description: String,
    upvotes: {type: Number, "default": 0, min: 0},
    comments: [answerSchema]
});

mongoose.model('question', questionSchema);