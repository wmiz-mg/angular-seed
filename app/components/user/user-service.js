'use strict';

angular.module('myApp')

.service('UserService', function(){
	var _name = '';
	var _role = '';
	var user = {};

	this.setName = function(name) {
		_name = name;
	}

	this.setRole = function(role){
		_role = role;
	}

	this.setUser = function(name, role) {
		_name = name;
		_role = role;
	}

	this.getUser = function() {
		user.name = _name;
		user.role = _role;
		return user;
	}

	this.getName = function() {
		return _name;
	}

	this.getRole = function(){
		return _role;
	}

	this.sayHello = function() {
		return 'Hello '+ _name +'!'; 
	}

	this.sayRole = function() {
		return 'My Role is ' + _role;
	}
});
