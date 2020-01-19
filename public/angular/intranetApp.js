angular.module('userListController', [])

var usersList = function ($scope){
    $scope.data - {
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

var myController = function($scope)
{
  $scope.items = ["one", "two", "three"];
};

console.log("Angular Accessed")
angular
    .module('intranetApp')
    .controller('userListController', 'userListController')