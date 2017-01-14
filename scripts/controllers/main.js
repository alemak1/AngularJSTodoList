'use strict';

angular.module('todoListApp')
.controller("mainCtrl",function($scope, dataService){


	$scope.helloConsole = dataService.helloConsole;

	// dataService.getTodos(function(response){
	// 	console.log(response.data);
	// 	 $scope.todos = response.data;
	// });

	$scope.helloworld = function(){
		console.log("This is the hello world function in the main controller!");
	}

	$scope.learningNgChange = function(){
		console.log("The value of the input has changed again!");
	}

	$scope.saveTodos = function(todo){

		var filteredTodos = $scope.todos.filter(function(todo){
			if(todo.edited){
				return todo;
			};
		});

		dataService.saveTodos(filteredTodos);

	}

	$scope.deleteTodo = function(todo, index){
		dataService.deleteTodo(todo);	
		$scope.todos.splice(index,1);
	}

	$scope.todos = [
		{"name": "clean the house"},
		{"name": "water the lawn"},
		{"name": "feed the dog"},
		{"name": "pay dem bills"},
		{"name": "read newspaper"},
		{"name": "fix toaster"},
		{"name": "fix oven"}
	]

	$scope.addTodo = function(){
		var todo = {name: "This is a new todo"};
		$scope.todos.unshift(todo);
	};

})

.controller("coolCtrl",function($scope){

	$scope.whoAmI = function(){
		console.log("hello there, this is the coolCtrl function");
	}

	$scope.helloworld = function(){
		console.log("This is not the main controller!");
	}

})

.controller("siblingCtrl", function($scope){
	$scope.foobar = 1234;
});