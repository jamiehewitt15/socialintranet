angular.module('intranetApp', [])

var usersList = function ($scope){
    $scope.data = {
        users: [{
            name: "Jamie Hewitt",
            location: "UK",
            joined: "2019-12-15T12:17:52.242Z",
        }, {
            name: "Rachel Wanyoike",
            location: "Kenya",
            joined: "2020-01-05T12:17:52.242Z",
        },
        {
            name: "John Roberts",
            location: "USA",
            joined: "2020-01-01T12:17:52.242Z",
        },
        {
            name: "Alec Hewitt",
            location: "UK",
            joined: "2020-01-15T12:17:52.242Z",
        }, {
            name: "Kui Wanyoike",
            location: "Kenya",
            joined: "2020-01-20T12:17:52.242Z",
        },
        {
            name: "George Roberts",
            location: "USA",
            joined: "2020-01-11T12:17:52.242Z",
        }

    ]
    }
}


console.log("Angular Accessed")
angular
    .module('intranetApp')
    .controller('usersList', usersList)