angular.module('app').controller("masterControl", function($scope, mainService){

    // $scope.somethingBroke = "Angular is working";

    $scope.Quotes = mainService.returnQuotes();

    $scope.removeQuote = function(text){
      mainService.removeQuote(text);
    }

    $scope.addQuote = function(quote){
      if (!quote || !quote.text || !quote.author) {
        console.log("form not filled out")
        return;
      }f
      mainService.addQuote(quote);
      // refresh();
      $scope.quote = {};

    }

    function refresh(){
      $scope.quote.text="";
      $scope.quote.author="";
    }




})
