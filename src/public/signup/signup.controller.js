(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MyInfoService'];
function SignUpController(MyInfoService) {
  var signup = this;

  signup.submit = function () {
    MyInfoService.getMenuMyInfo(signup.menu_short_name)
        .then(
            function (response) {
              signup.completed = true;
              signup.menuError = false;
              MyInfoService.saveMyInfo({
                firstname: signup.firstname,
                lastname: signup.lastname,
                email: signup.email,
                item_info: {
                  short_name: signup.menu_short_name,
                  name: response.data.name,
                  description: response.data.description,
                },
                phone: signup.phone,
              });
            })
        .catch(
            function (error) {
              signup.completed = false;
              signup.menuError = true;
            });
  };
}
})();
