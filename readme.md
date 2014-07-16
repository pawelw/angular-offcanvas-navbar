Angular Offcanvas Navbar
========================

Angular Offcanvas Navbar is an angularJs directive that creates a side navigation menu based on twitter bootstrap. 

Install
========================

1. Add offcanvas-navbar.js to your main file (index.html)
2. Set ngOffcanvas as a dependency in your module
	var myapp = angular.module('myapp', ['ngOffcanvas'])
3. Add ng-csv directive to your main page container:
	<div off-canvas-navbar></div>
	
By default CSS uses .container as the parent containig HTML element. This parent HML element is the one that will be animated.