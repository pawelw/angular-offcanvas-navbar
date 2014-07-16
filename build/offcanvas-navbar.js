'use strict';

angular.module('initApp')
	
	/**!
	 * AngularJS directve
	 * @author Pawel Witkowski
	 * 
	 */    
  .directive('offCanvasNavbar', ['$timeout',
 	 function ($timeout) {
	 	 return {
		 	 restrict: 'AE',
		 	 scope: {
		 	 
		 	 },
		 	 replace: true,
		 	 template: 
			 	 '<button class="lines-button x collapsed pull-right" type="button" role="button" aria-label="Toggle Navigation" ng-click="toggleNavigation()">' +
					  '<span class="lines"></span>' +
				 '</button>', 
		 	 link: function (scope, element, attrs) {
		 	 
			 	 var container = element.parent();
			 	 
			 	 function collapse() {
			 	 	 container.removeClass('expanded');
					 $timeout(function(){
						 container.removeClass('menu-active')
					 }, 200); 
			 	 }
			 	 function expand() {
				 	 container.addClass('expanded menu-active');		 	 
			 	 }
			 	 
			 	 scope.toggleNavigation = function() {
				 	 
				 	 if(element.hasClass('collapsed')) {	 
					 	 expand();	 	 
						 element.removeClass('collapsed').addClass('expanded'); 
				 	 } else {	
					 	 collapse();
						 element.removeClass('expanded').addClass('collapsed');  
				 	 }				 	 
				 };
		 	 }
	 	 }; 
  }]);
