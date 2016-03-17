//sounder.module('',[])controller('mainController', function ($scope, $http) { 

//}]);


var app = angular.module('sounds');

app.controller('MainController', function($scope, soundService, $sce) {
  $scope.getArtist = function() {
    if($scope.searchArtist.indexOf(' ') !== -1) {
      $scope.searchArtist = $scope.searchArtist.replace(' ', '-')
    }
    console.log($scope.searchArtist);
    soundService.getArtist($scope.searchArtist).then(function(data) {
      $scope.artist = data.data;
      console.log($scope.artist);
    })
    $scope.searchArtist = '';
  }

  $scope.play = function(track_url) {
    console.log(track_url);
    SC.oEmbed(track_url, { auto_play: true }, function(oEmbed) {
      $scope.$apply($scope.iFrame = $sce.trustAsHtml(oEmbed.html));
    });
  }



});