Installation
============

The first thing you need to do is install Yeoman, Grunt and Bower. We're going to use the Node Package Manager to do this all at once. In a terminal, run the following:

	npm install -g yo grunt-cli bower

Run the following to install the AngularJS generator:

	npm install -g generator-angular  				# install generator
	
Now it’s time to generate a shiny new AngularJS application. In a fresh project directory, run:
	
	yo angular                        				# scaffold out a AngularJS project
	bower install angular-ui          				# install a dependency for your project from Bower
	bower install angular-bootstrap --save			# install ported Bootstrap Javascript into Angular

Initialize git repository and pull the project to your generated new AngularJs application folder

	git init
	git remote add origin https://wpawel@bitbucket.org/wpawel/palmares.git 
	git pull origin master

... or clone origin repository to the empty folder and copy files to the project folder

Now you can use those to test, preview and build

	grunt test                        				# test your app
	grunt server                      				# preview your app
	grunt                             				# build the application for deployment