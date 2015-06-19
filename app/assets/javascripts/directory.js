angular.module('directoryApp', [])
    .controller('directoryController', function() {

        var dirList = this;

        dirList.list = [{
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
            age: 23
        }, {
            name: 'Lam',
            age: 26
        }];

        dirList.addPerson = function() {
            dirList.list.push({
                name: dirList.name,
                age: dirList.age
            });
            dirList.name = '';
            dirList.age = 0;
        };
    });
