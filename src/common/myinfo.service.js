(function () {
"use strict";

angular.module('common')
.service('MyInfoService', MyInfoService);


MyInfoService.$inject = ['$http', 'ApiPath'];
function MyInfoService($http, ApiPath) {
  var service = this;

  var savedInfo;

  service.getMenuMyInfo = function (shortName) {
      return $http
          .get(ApiPath + '/menu_items/' + shortName + '.json')
          .then(
              function (response) {
                console.log(response)
                //savedInfo['item_info'] = {
                //  r
                //}
                return response;
              },
              function (error) {
                throw new Error("Error");
                //savedInfo['item_info'] = {
                //  r
                //}
              }
              );
  }
  service.getMyInfo = function () {
    if (savedInfo && !savedInfo.item_info) {
      return $http
          .get(ApiPath + '/menu_items/' + savedInfo.item_short_name + '.json')
          .then(function (response) {
            console.log(response)
            //savedInfo['item_info'] = {
            //  r
            //}
            return savedInfo;
          });
    }
    return savedInfo;
  };


  service.saveMyInfo = function (myInfo) {
    savedInfo = myInfo;
  };

}



})();
