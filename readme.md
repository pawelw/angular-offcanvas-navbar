Angular Offcanvas Navbar
========================

Angular Offcanvas Navbar is an angularJs directive that creates a side navigation menu based on twitter bootstrap. 

Install
========================

1. Add build/offcanvas-navbar.js to your main file (index.html)
2. Add build/offcanvas-navbar.css to your main file (index.html) or import and compile scss version
2. Set ngOffcanvas as a dependency in your module

	```javascript
	var myapp = angular.module('myapp', ['ngOffcanvas'])
	```	
	
3. Add off-canvas-navbar directive to your container (you must have it as a direct child element):

	```html
	<div off-canvas-navbar></div>
	```	
	
4. Use along with twitter bootstrap navbar. If you don't have navbar yet you can use this code as a starter

	```html
			<nav id="navbar" class="visible-xs">
				<ul>
					<li class="relative"><a ng-href="#/">Home</a>
					<li class="relative"><a ng-href="#/">Home 2</a>
					<li class="relative"><a ng-href="#/">Home 3</a>
				</ul>
			</nav>
	```
	
By default CSS assumes that ".container" is the parent HTML element that will be animated. If you want to use different class name please change in offcanvas-navbar.css or offcanvas-navbar.scss if you are using sass.

Example
========================
http://jsfiddle.net/pawelw/yFRjr/3/

