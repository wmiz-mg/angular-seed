// 'use strict';

// angular.module('myApp.user-factory',[])

// .factory('UserFactory', function(){
// 	var _name = '';
// 	var _role = '';
// 	var user = {};

// 	user.setUser = function (name, role) {
// 		_name = name;
// 		_role = role;
// 	}

// 	user.getUser = function () {
// 		user.name = _name;
// 		user.role = _role;
// 		return user;
// 	}

// 	return user;
// });

// .factory('UserFactory', ['$rootScope', '$state', 'UserService',
//   function($rootScope, $state, UserService) {
//     return {
//       authorize: function() {
//         var isAuthenticated = UserService.isAuthenticated();

//         if ($rootScope.toState.data.roles && $rootScope.toState.data.roles.length > 0 ) {
//           if (isAuthenticated) {
//               $state.go('accessdenied');
//           } else {
//             $rootScope.returnToState = $rootScope.toState;
//             $rootScope.returnToStateParams = $rootScope.toStateParams;
//               $state.go('signin');
//           }
//         }
//       }
//     };
// }]);
