var mongoose = require('mongoose');
var News = mongoose.model('news');

var sendJsonResponse = function (res, status, content){
    res.status(status);
    res.json(content);
}

// module.exports.newsReadOne = function (req, res) { 
//     if(req.params && req.params.questionid) {
//         News
//             .findById(req.params.newsid)
//             .exec(function(err, news){
//                 if(!news){
//                     sendJsonResponse(res, 404, {'message' : 'News Post not found'});
//                     //return;
//                 } else if (err){
//                     sendJsonResponse(res, 404, err);  
//                     //return;              
//                 } else {
//                     sendJsonResponse(res, 200, newsid);
//                     }                
//             });
//     }else{
//         sendJsonResponse(res, 404, {'message': 'No newsid in request'});
//         }
// };


module.exports.newsReadOne = function (req, res) {
    // News.find({}, function(err, news) {
    //     if (!err){ 
    //         console.log(news);
    //         console.log("No error")
            
    //     } else {throw err; 
    //         console.log("Error")}
        
    // });

    if(req.params && req.params.newsid) {
        News.findById(req.params.newsid).exec(function(err, news){
            if(!news){
                sendJsonResponse(res, 404, {'message' : 'News not found'});
            } else if (err){
                sendJsonResponse(res, 404, err);                
            } else {
                sendJsonResponse(res, 200, news);
            }
        });
    }else{
        sendJsonResponse(res, 404, {'message': 'No newsid in request'});
    }
};

module.exports.newsList = function (req, res) {
    News.find().exec(function(err, news){
        if(!news){
            sendJsonResponse(res, 404, {'message' : 'News not found'});
        } else if (err){
            sendJsonResponse(res, 404, err);
        } else {
            sendJsonResponse(res, 200, news);
        }
    });
};

module.exports.doNewsLike = function (req, res) {
    console.log("doNewsLike starting")
        if(req.params && req.params.newsid) {
            News.findById(req.params.newsid).exec(
                function(err, news){
                    
                    if(!news){
                        sendJsonResponse(res, 404, {'message' : 'News not found'});
                    } else if (err){
                        sendJsonResponse(res, 404, err);                
                    } else {
                        news.likes = news.likes + 1;
                        console.log("doNewsLike likes")
                        console.log(news.likes)
                        news.save(function(err, news){
                            if(err){
                                sendJsonResponse(res, 404, err);
                            }else{
                                sendJsonResponse(res, 200, news);
                            }
                        });
                        
                    }
            });
        }else{
            sendJsonResponse(res, 404, {'message': 'No newsid in request'});
        }
        console.log("doNewsLike finishing")
    };



// module.exports.newsListByLikes = function (req, res) {
//     News.find().exec(function(err, news){
//         if(!news){
//             sendJsonResponse(res, 404, {'message' : 'News not found'});
//         } else if (err){
//             sendJsonResponse(res, 404, err);
//         } else {
//             sendJsonResponse(res, 200, news);
//         }
//     });
// };
// module.exports.newsCreate = function (req, res) {
//     News.create({
//         name: req.body.name,
//         status: req.body.status,
//         summary: req.body.summary,
//         skills: req.body.skills.split(","),
//         description: req.body.description,
//         //upvotes: req.body.upvotes, should default to zero.
//         comments: []
//     }, function(err, question){
//         if(err){
//             sendJsonResponse(res, 400, err);
//         }else{
//             sendJsonResponse(res, 201, question);
//         }
//     });
// };
// module.exports.newsUpdateOne = function (req, res) {
//     if(req.params && req.params.questionid) {
//         News.findById(req.params.questionid).exec(
//             function(err, question){
                
//                 if(!question){
//                     sendJsonResponse(res, 404, {'message' : 'Question not found'});
//                 } else if (err){
//                     sendJsonResponse(res, 404, err);                
//                 } else {

//                     question.name = req.body.name;
//                     question.status = req.body.status;
//                     question.summary = req.body.summary;
//                     question.skills = req.body.skills.split(",");
//                     question.description = req.body.description;
//                     question.upvotes = req.body.upvotes;

//                     question.save(function(err, question){
//                         if(err){
//                             sendJsonResponse(res, 404, err);
//                         }else{
//                             sendJsonResponse(res, 200, question);
//                         }
//                     });
                    
//                 }
//         });
//     }else{
//         sendJsonResponse(res, 404, {'message': 'No questionid in request'});
//     }
// };


// module.exports.newsUpvote = function (req, res) {
//     if(req.params && req.params.questionid) {
//         News.findById(req.params.questionid).exec(
//             function(err, question){
                
//                 if(!question){
//                     sendJsonResponse(res, 404, {'message' : 'Very sorry! Question not found'});
//                 } else if (err){
//                     sendJsonResponse(res, 404, err);                
//                 } else {

//                     question.upvotes = question.upvotes + 1;

//                     question.save(function(err, question){
//                         if(err){
//                             sendJsonResponse(res, 404, err);
//                         }else{
//                             sendJsonResponse(res, 200, question);
//                         }
//                     });
                    
//                 }
//         });
//     }else{
//         sendJsonResponse(res, 404, {'message': 'No questionid in request'});
//     }
// };

// module.exports.newsDeleteOne = function (req, res) {
//     sendJsonResponse(res, 200, {"status" : "success"});
// };