var mongoose = require('mongoose');
var Users = mongoose.model('users');

var sendJsonResponse = function (res, status, content){
    res.status(status);
    res.json(content);
}

module.exports.usersReadOne = function (req, res) {
    // Users.find({}, function(err, user) {
    //     if (!err){ 
    //         console.log(user);
    //         console.log("No error")
            
    //     } else {throw err;}
    //     console.log("No error")
    // });
    
    if(req.params && req.params.userid) {
        console.log(req.params.userid)        
        Users.findById(req.params.userid).exec(function(err, user){
            
            if(!user){
                sendJsonResponse(res, 404, {'message' : 'User not found'});
                console.log("User not found")
            } else if (err){
                sendJsonResponse(res, 404, err);  
                console.log("error")              
            } else {
                sendJsonResponse(res, 200, user);
                console.log("usersReadOne Success")
            }
        });
    }else{
        sendJsonResponse(res, 404, {'message': 'No userid in request'});
    }
};

module.exports.usersCreate = function (req, res) {
    Users.create({
        name: req.body.name,
        description: req.body.description
    }, function(err, user){
        if(err){
            sendJsonResponse(res, 400, err);
            console.log("Error")
            console.log(res)
            console.log(err)
            console.log(user)
        }else{
            sendJsonResponse(res, 201, user);
            console.log("usersCreate Success")
        }
    });
};


module.exports.usersList = function (req, res) {
    console.log('Users API start')
    Users.find().exec(function(err, user){
        
        if(!user){
            sendJsonResponse(res, 404, {'message' : 'Users not found'});
        } else if (err){
            sendJsonResponse(res, 404, err);
        } else {
            sendJsonResponse(res, 200, user);
        }
    });
    console.log('Users render finish')
};
