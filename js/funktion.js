  var app = angular.module("app", ["firebase"]);

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCQV5n8qVX5ud_k_HEOHOHZoa4gIybY5_4",
    authDomain: "hugo-4cc02.firebaseapp.com",
    databaseURL: "https://hugo-4cc02.firebaseio.com",
    projectId: "hugo-4cc02",
    storageBucket: "",
    messagingSenderId: "315545338616"
  };
  firebase.initializeApp(config);

  app.factory("kommentarer", function($firebaseArray) {
    var ref = firebase.database().ref().child("kommentarer");
    return $firebaseArray(ref);
  });

  app.controller("KommentarCtrl", function($scope, kommentarer) {
    
  $scope.kommentarer = kommentarer;

    // Definera en kommentar med tom text och skribent
    $scope.kommentar = {
        text: "",
        skribent: ""
    };
    $scope.addComment = function() {
    // Här lägger vi till vår kommentar ($scope.kommentar) till listan med kommentarer.
    // Det sparas automatiskt i Firebase-databasen.
    $scope.kommentarer.$add($scope.kommentar);

    // Tömmer texten i kommentarfältet
    $scope.kommentar = {
        text: "",
        skribent: ""
    };
};
  });










