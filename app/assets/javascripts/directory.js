angular.module('directoryApp', [])
    .controller('directoryController', function() {

        var dirList = this;

        dirList.toggle = false;

        dirList.list = [{
            name: 'Pubudu',
            age: 24
        }, {
            name: 'Dan',
            age: 31
        }, {
            name: 'Ross',
            age: 26
        }, {
            name: 'Ben',
            age: 23
        }, {
            name: 'Lam',
            age: 33
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
