'use strict';

angular.module('myApp.user-service',[])

.service('UserService', function(){
	var _verified = '';
	var _name = 'Wan';
	var _role = 'Admin';
	var _email = 'wan@wan'
	var _isAuthenticated = false
	var user = {};

	function setEmail(email) {
		_email = email;
	}

	this.isAuthenticated  = function (){
        var storedUser = JSON.parse(localStorage.getItem("user"));
		if(storedUser){
			_isAuthenticated = true
		}else{
			_isAuthenticated = false
		}
		return _isAuthenticated;
	}

	this.login = function(usr,pass){
		if(usr === 'wan@wan' && pass === 'asd'){
			setEmail(usr)
			var user = this.getUser()
			_isAuthenticated = true
			localStorage.setItem("user", JSON.stringify(user));
		}
	}

	this.logout = function(){
		_isAuthenticated = false;
		console.log(localStorage)
		localStorage.removeItem("user");
	}

	this.setName = function(name){
		_name = name;
	}

	// this.setEmail = function(email) {
	// 	_email = email;
	// }

	this.setRole = function(role) {
		_role = role;
	}

	this.setUser = function(name, role) {
		_name = name;
		_role = role;
	}

	this.getUser = function() {
		user.name = _name;
		user.role = _role;
		user.email = _email;
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
	return {
		isAuthenticated : this.isAuthenticated,
		login: this.login,
		getUser: this.getUser,
		logout : this.logout
	}
});
