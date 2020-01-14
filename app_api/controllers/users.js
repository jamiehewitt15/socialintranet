var mongoose = require('mongoose');
var Users = mongoose.model('users');

var sendJsonResponse = function (res, status, content){
    res.status(status);
    res.json(content);
}

module.exports.usersReadOne = function (req, res) {
    if(req.params && req.params.userid) {
        Users.findById(req.params.newsid).exec(function(err, user){
            if(!user){
                sendJsonResponse(res, 404, {'message' : 'User not found'});
            } else if (err){
                sendJsonResponse(res, 404, err);                
            } else {
                sendJsonResponse(res, 200, userid);
            }
        });
    }else{
        sendJsonResponse(res, 404, {'message': 'No newsid in request'});
    }
};

// module.exports.usersReadOne = function (req, res) { 
//     Users
//         .findById(req.params.userid)
//         .exec(function(err, user){
//             sendJsonResponse(res, 200, {"status" : "Success"});
//         });
    
// };

module.exports.usersCreate = function (req, res) {
    console.log(req.body.password);
    Users.create({
        name: req.body.name,
        description: req.body.description,
        // password: req.body.password,
    }, function(err, user){
        if(err){
            sendJsonResponse(res, 400, err);
        }else{
            sendJsonResponse(res, 201, user);
        }
    });
};