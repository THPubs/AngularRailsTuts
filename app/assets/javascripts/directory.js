angular.module('directoryApp', ['templates'])
    .controller('directoryController', function() {

        var dirList = this;

        dirList.toggle = true;

        dirList.templateUrl = 'person.html';

        dirList.list = [{
            name: 'Pubudu',
            age: 24,
            img: 'https://s3.amazonaws.com/uifaces/faces/twitter/gerrenlamson/128.jpg'
        }, {
            name: 'Dan',
            age: 31,
            img: 'https://s3.amazonaws.com/uifaces/faces/twitter/rssems/128.jpg'
        }, {
            name: 'Ross',
            age: 26,
            img: 'https://s3.amazonaws.com/uifaces/faces/twitter/glif/128.jpg'
        }, {
            name: 'Ben',
            age: 23,
            img: 'https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg'
        }, {
            name: 'Lam',
            age: 33,
            img: 'https://s3.amazonaws.com/uifaces/faces/twitter/sortino/128.jpg'
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
