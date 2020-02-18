var mongoose = require( "mongoose");
mongoose.connect("mongodb+srv://jamie:st26can18@cluster0-mb7hs.mongodb.net/Intranet", { useNewUrlParser: true });
//MongoClient.connect("mongodb://localhost:27017/YourDB", { useNewUrlParser: true })

//var dbURI = 'mongodb+srv://jamie:st26can18@cluster0-mb7hs.mongodb.net/test?retryWrites=true&w=majority';
//mongoose.connect(dbURI);

mongoose.connection.on('connected', function(){
    console.log('Hello and welcome! Mongoose is connected to ' + "the database")
});

mongoose.connection.on('error', function(err){
    console.log('Hello, unfortunately an error has occured... Mongoose connection error ' + err)
});

mongoose.connection.on('disconnected', function(){
    console.log('Goodbeye and thank you for visiting! Mongoose is disconnected')
});

var gracefulShutdown = function (msg, callback) {
    mongoose.connection.close(function () {
        console.log('Mongoose has been disconnected through ' + msg);
        callback();
    })
};

process.once('SIGUSR2', function() {
    gracefulShutdown('nodemon restart', function(){
        process.kill(process.pid, 'SIGUSR2');
    });    
});

process.on('SIGINT', function() {
    gracefulShutdown('app termination', function(){
        process.exit(0);
    });    
});

process.on('SIGTERM', function() {
    gracefulShutdown('Heroku app shutdown', function(){
        process.exit(0);
    });    
});

require('./schema');
require('./userSchema');
require('./question');

