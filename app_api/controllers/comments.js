var mongoose = require('mongoose');
var News = mongoose.model('news');

var sendJsonResponse = function (res, status, content){
    res.status(status);
    res.json(content);
}

module.exports.newsCommentCreate = function (req, res) {
    var newsid = req.params.newsid
    if(newsid){
        Comments.findById(newsid)
                .select('comments')
                    .exec( function( err, news) {
                        if (err){
                            sendJsonResponse(res, 400, err);
                        }else{
                            doAddComment(req, res, news);
                        }
                    });
    } else {
        sendJsonResponse(res, 404, {"message" : "News id not found."});
    }
};