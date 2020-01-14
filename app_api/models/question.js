var mongoose = require( 'mongoose' );

var answerSchema = new mongoose.Schema({
    name: String,
    comment: String
});

var questionsSchema = new mongoose.Schema({
    name: String,
    status: String,
    summary: String,
    description: String,
    upvotes: {type: Number, "default": 0, min: 0},
    comments: [answerSchema]
});

mongoose.model('questions', questionsSchema);