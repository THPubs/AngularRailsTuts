angular.module('directoryApp', [])
    .controller('directoryController', function($scope) {
        $scope.list = [{
            name: 'Pubudu',
            age: 24
        }, {
            name: 'Dan',
            age: 26
        }, {
            name: 'Ross',
            age: 26
        }, {
            name: 'Ben',
            age: 26
        }, {
            name: 'Lam',
            age: 26
        }];
    });
