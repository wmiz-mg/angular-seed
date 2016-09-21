angular.module('myApp.myname',[]).service('MyNameService', function(){
	var _name = "Wan";

	this.getName = function() {
		return _name;
	}
	this.setName = function(name){
		_name = name;
	}
	return {
		getName: this.getName,
		setName: this.setName
	}
})