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
            var data = response.data
            
            $scope.news = data;
            console.log(data);
        })
       
            
}



console.log("Angular Accessed")
angular
    .module('intranetApp')
    .controller('usersList', usersList)
    .service('userData', userData)

//     users: [{
//         name: "Jamie Hewitt",
//         location: "UK",
//         joined: "2019-12-15T12:17:52.242Z",
//     }, {
//         name: "Rachel Wanyoike",
//         location: "Kenya",
//         joined: "2020-01-05T12:17:52.242Z",
//     },
//     {
//         name: "John Roberts",
//         location: "USA",
//         joined: "2020-01-01T12:17:52.242Z",
//     },
//     {
//         name: "Alec Hewitt",
//         location: "UK",
//         joined: "2020-01-15T12:17:52.242Z",
//     }, {
//         name: "Kui Wanyoike",
//         location: "Kenya",
//         joined: "2020-01-20T12:17:52.242Z",
//     },
//     {
//         name: "George Roberts",
//         location: "USA",
//         joined: "2020-01-11T12:17:52.242Z",
//     }

// ]