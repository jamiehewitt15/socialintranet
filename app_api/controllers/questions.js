var mongoose = require('mongoose');
var Questions = mongoose.model('questions');

var sendJsonResponse = function (res, status, content){
    res.status(status);
    res.json(content);
}

module.exports.questionsList = function (req, res) {
    Questions.find().exec(function(err, question){
        if(!news){
            sendJsonResponse(res, 404, {'Questions' : 'Question not found'});
        } else if (err){
            sendJsonResponse(res, 404, err);
        } else {
            sendJsonResponse(res, 200, question);
        }
    });
};