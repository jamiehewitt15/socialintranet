var mongoose = require('mongoose');
var Comments = mongoose.model('news');

var sendJsonResponse = function (res, status, content){
    res.status(status);
    res.json(content);
}

module.exports.newsCommentCreate = function (req, res) {
    console.log("API newsCommentCreate START")
    var newsid = req.params.newsid
    if(newsid){
        Comments.findById(newsid)
                .select('comments')
                    .exec( function( err, news) {
                        if (err){
                            sendJsonResponse(res, 400, err);
                        }else{
                            doAddComment(req, res, news);
                            console.log("API newsCommentCreate SUCCESS")
                        }
                    });
    } else {
        sendJsonResponse(res, 404, {"message" : "News id not found."});
    }
};

var doAddComment = function(req, res, news){
    console.log(req.body.name);
    console.log(req.body.comment);
    news.comments.push({
        name: req.body.name,
        comment: req.body.comment
    });
    news.save( function(err, news){
        var thisComment;
        if(err){
            sendJsonResponse(res, 400, err);
        }else{
            thisComment = news.comments[news.comments.length - 1];
            sendJsonResponse(res, 201, thisComment);
        }
    });
}