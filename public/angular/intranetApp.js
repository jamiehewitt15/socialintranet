angular.module('intranetApp', [])

var userData = function($http) {
    return $http.get('/api/users')
}

var newsData = function($http) {
    return $http.get('/api/')
}

var usersList = function ($scope, userData){
    userData
        .then(function (response){
            var data = response.data;
            
            $scope.data = response.data;
            
        })
       
            
}

var newsList = function ($scope, newsData){
    newsData
        .then(function (response){
            var data = response.data;
            
            $scope.data = response.data;
            console.log(data);
        })
       
            
}



console.log("Angular Accessed")
angular
    .module('intranetApp')
    .controller('usersList', usersList)
    .controller('newsList', newsList)
    .service('userData', userData)
    .service('newsData', newsData)
