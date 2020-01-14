var mongoose = require('mongoose');
var Questions = mongoose.model('questions');

var sendJsonResponse = function (res, status, content){
    res.status(status);
    res.json(content);
}

module.exports.questionsList = function (req, res) {
    console.log('Questions API start')

//     Questions.find({}, function(err, questions) {
//         if (!err){ 
//             console.log(questions);
//             console.log("No error")
            
//         } else {throw err;}
//         console.log("Error")
//     });
// };

    Questions.find().exec(function(err, question){
        
        if(!question){
            sendJsonResponse(res, 404, {'message' : 'Questions not found'});
        } else if (err){
            sendJsonResponse(res, 404, err);
        } else {
            sendJsonResponse(res, 200, question);
        }
    });
    console.log('Questions render finish')
};

module.exports.doQuestionsUpvote = function (req, res) {
    console.log("doQuestionsUpvote starting")
        if(req.params && req.params.questionid) {
            Questions.findById(req.params.questionid).exec(
                function(err, questions){
                    
                    if(!questions){
                        sendJsonResponse(res, 404, {'message' : 'Question not found'});
                    } else if (err){
                        sendJsonResponse(res, 404, err);                
                    } else {
                        questions.likes = questions.likes + 1;
                        console.log("doQuestionsUpvote likes")
                        console.log(questions.likes)
                        questions.save(function(err, questions){
                            if(err){
                                sendJsonResponse(res, 404, err);
                            }else{
                                sendJsonResponse(res, 200, questions);
                            }
                        });
                        
                    }
            });
        }else{
            sendJsonResponse(res, 404, {'message': 'No questionsID in request'});
        }
        console.log("doQuestionsUpvote finishing")
    };

module.exports.questionsReadOne = function (req, res) {
    console.log("questionsReadOne started")
    if(req.params && req.params.questionid) {
        Questions.findById(req.params.questionid).exec(function(err, questions){
            if(!questions){
                sendJsonResponse(res, 404, {'message' : 'Question not found'});
            } else if (err){
                sendJsonResponse(res, 404, err);                
            } else {
                sendJsonResponse(res, 200, questions);
            }
        });
    }else{
        sendJsonResponse(res, 404, {'message': 'No questionID in request'});
    }
    console.log("questionsReadOne finishing")
};





