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
	
By default CSS assumes that ".container" is the parent HTML element that will be animated. If you want to use different class name please change in offcanvas-navbar.css or offcanvas-navbar.scss if you are using sass.

Example
========================
http://jsfiddle.net/yFRjr/2/

