
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" type="text/css" href="styles/main.css">
</head>
<body ng-app="todoListApp">
	
	<h1>My TODOs</h1>
	
	<todos></todos>
<!-- 
		<div class = "list" ng-controller="mainCtrl">
		<div class="add">
			<a href="" title="" ng-click="addTodo()">+Add a New Task</a>
		</div>
		<div class="item" ng-repeat="todo in todos | orderBy: 'completed'" ng-class="{'edited': todo.edited, 'completed':todo.completed}" ng-init="todo.completed = false">
		
		<input ng-model="todo.completed" type="checkbox" ng-click="todo.completed =!todo.completed; todo.edited = true;"/>

		<label ng-click="editing = true;" ng-hide="editing">{{todo.name}}</label>
		<input ng-change="todo.edited = true;" ng-blur="editing = false;" ng-show="editing" ng-model="todo.name" type="text" class="editing-label" />

			<div class="actions" ng-class="{'editing-item':editing}" >
				<a href="" ng-click="editing = !editing">Edit</a>
				<a href="" ng-click="saveTodos(todo)">Save</a>
				<a href="" class="delete" ng-click="deleteTodo(todo, $index)">Delete</a>
			</div>

		</div>
	</div> -->

	<script type="text/javascript" src="vendor/angular.min.js"></script>
	<script type="text/javascript" src="scripts/app.js"></script>
	<script type="text/javascript" src="scripts/controllers/main.js"></script>
	<script type="text/javascript" src="scripts/services/data.js"></script>
	<script type="text/javascript" src="scripts/hello-world.js"></script>
	<script type="text/javascript" src="scripts/directives/todos.js"></script>
</body>
</html>