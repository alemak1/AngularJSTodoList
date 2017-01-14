angular.module("todoListApp")
.directive("helloWorld", function(){
	return {
		template: " <h3>Grocery List: </h3>\
		<ol> \
		<li>Apples</li>\
		<li>Oranges</li>\
		</ol> \
		",
		restrict: "E"
	}
});