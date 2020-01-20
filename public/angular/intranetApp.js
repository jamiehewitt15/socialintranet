angular.module('userListController', [])

var usersList = function ($scope){
    $scope.data = {
        users: [{
            name: "Jamie Hewitt",
            location: "UK"
        }, {
            name: "Rachel Wanyoike",
            location: "Kenya"
        }
    ]
    }
}


console.log("Angular Accessed")
angular
    .module('intranetApp')
    .controller('usersList', 'usersList')