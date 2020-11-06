(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['myinfo', 'ApiPath'];
function MyInfoController(myinfo, ApiPath) {
  var myInfoController = this;
  myInfoController.myinfo = myinfo;
  myInfoController.basePath = ApiPath;
}


})();
