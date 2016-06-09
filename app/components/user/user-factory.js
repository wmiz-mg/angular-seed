'use strict';

angular.module('myApp')

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

.factory('UserFactory', function(){
	var _name = '';
	var _role = '';
	var user = {};

	return {
		setUser : function (name, role) {
			_name = name;
			_role = role;
		},

        getUser : function () {
            user.name = _name;
            user.role = _role;
                return user;
        }
	};
});
