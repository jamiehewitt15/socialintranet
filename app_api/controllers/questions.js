var mongoose = require('mongoose');
var Questions = mongoose.model('questions');

var sendJsonResponse = function (res, status, content){
    res.status(status);
    res.json(content);
}

module.exports.questionsList = function (req, res) {
    Questions.find().exec(function(err, questions){
        console.log('Questions render start')
        if(!questions){
            sendJsonResponse(res, 404, {'message' : 'Questions not found'});
        } else if (err){
            sendJsonResponse(res, 404, err);
        } else {
            sendJsonResponse(res, 200, questions);
        }
    });
    console.log('Questions render finish')
};

module.exports.doQuestionsUpvote = function (req, res) {
    console.log("doQuestionsUpvote starting")
        if(req.params && req.params.questionid) {
            Questions.findById(req.params.questionid).exec(
                function(err, question){
                    
                    if(!question){
                        sendJsonResponse(res, 404, {'message' : 'Question not found'});
                    } else if (err){
                        sendJsonResponse(res, 404, err);                
                    } else {
                        question.likes = question.likes + 1;
                        console.log("doQuestionsUpvote likes")
                        console.log(question.likes)
                        news.save(function(err, news){
                            if(err){
                                sendJsonResponse(res, 404, err);
                            }else{
                                sendJsonResponse(res, 200, question);
                            }
                        });
                        
                    }
            });
        }else{
            sendJsonResponse(res, 404, {'message': 'No questionsID in request'});
        }
        console.log("doQuestionsUpvote finishing")
    };

// module.exports.newsReadOne = function (req, res) {
//     if(req.params && req.params.questionid) {
//         Questions.findById(req.params.questionid).exec(function(err, question){
//             if(!question){
//                 sendJsonResponse(res, 404, {'message' : 'Question not found'});
//             } else if (err){
//                 sendJsonResponse(res, 404, err);                
//             } else {
//                 sendJsonResponse(res, 200, question);
//             }
//         });
//     }else{
//         sendJsonResponse(res, 404, {'message': 'No questionID in request'});
//     }
// };





