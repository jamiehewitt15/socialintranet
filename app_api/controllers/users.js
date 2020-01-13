var mongoose = require('mongoose');
var Users = mongoose.model('Intranet');

var sendJsonResponse = function (res, status, content){
    res.status(status);
    res.json(content);
}

module.exports.usersCreate = function (req, res) {
    Users.create({
        name: req.body.name,
        description: req.body.description
    }, function(err, user){
        if(err){
            sendJsonResponse(res, 400, err);
        }else{
            sendJsonResponse(res, 201, user);
        }
    });
};