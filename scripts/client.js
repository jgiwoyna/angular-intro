var sigmanautApp = angular.module('SigmanautApp', []);

sigmanautApp.controller('SigmanautController', function(){
  console.log('Sigmanaut controller loaded');

  var self = this; // holds the value of this

  self.people = [
    {
      "firstName": "Luke",
      "lastName": "Schlangen",
      "git_username": "LukeSchlangen",
      "shoutout": "Thanks for being awesome during the angular lecture today."
    },
    {
      "firstName": "Joe",
      "lastName": "Giwoyna",
      "git_username": "jgiwoyna",
      "shoutout": "The entire Sigma cohort for being the most legit."
    }
  ];

  self.newPerson = {};

  self.createPerson = function(){
    console.log(self.newPerson);
    self.people.push(angular.copy(self.newPerson));
  };

});
