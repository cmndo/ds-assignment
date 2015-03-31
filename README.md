# Digital Surgeons Technology Assignment #

## Overview ##

For your first assignment we need to gauge your ability to communicate with appointed key team members (Adam Chambers) and quickly pick-up and apply key technologies. We will measure your ability to go from approved PSD design into a living, breathing responsive website powered by ExpressionEngine.

We will measure your success for this assignment on the following attributes:

- Your ability to deliver the completed assignment within a reasonable period of time demonstrating the below defined functionality.
- Communication Skills (asks questions, works well with team, comments via code and commits)
- Client-side code practices
- Server-side code practices

## Your Assignment ##

Build out the Press & Inquiries page of the Arccos website using the PSD provided. The project should be tracked using Git and the repo provided upon completion, along with a link to a hosted version of the application. Please ensure you clearly comment your code, including PHP, ExpressionEngine templates, Sass, and JavaScript. This way you can explain any decisions you make, as well as making it easier for us to dissect the codebase.

### Server Side ###

The page should be driven by ExpressionEngine using a single channel and set of custom fields. The page represented in the PSD contains a set of “blog articles”. The channel will represent that data, with each entry being a “blog post”.  In addition to applying the core channel entries concepts to the blog posts, the contact form in the footer will need to be implemented using a custom add-on. 

The add-on need only accomplish the following:

- Validate input data
- Send an email
- Implement basic spam protection (honeypot)
- No need for fancy smtp configurations or akismet integration. Just make it functional.


### Client Side ###

The front end of the application should be built using semantic and well structured HTML, Sass and JavaScript. The site must be fully responsive and function in a progressively enhanced manner across the browsers and devices listed below. There are no responsive mockups so you will need to make design decisions to ensure the site displays in a usable manner across all screen sizes.

There are three main features of front end functionality that should be accounted for: 

- The buttons at the top of the page should direct the user to the appropriate section. 
- The ‘more articles’ button should reveal another 3 articles. Bonus points for building working pagination.
- Simple front end validation of the form. Nothing too complicated, however each field should be validated with a clear representation of the result displayed to the user.

### Browser/Device Support (latest browser versions) ###

- Windows - Chrome, Safari, Firefox, IE9+
- OSX - Chrome, Firefox, Safari
- iOS  - Chrome, Safari
- Android  - Chrome

## Deliverables ##

Once complete, please email [Adam Chambers](mailto:ac@digitalsurgeons.com) with a link to download your codebase including Git, as well as a link to a hosted version of the application.


## Getting Started... ##

First download the starter codebase, database dump and PSD design [from Dropbox](https://dl.dropboxusercontent.com/u/7971307/Digital%20Surgeons%20Technology%20Assignment.zip). The codebase includes an [Expression Engine Core](https://store.ellislab.com/#ee-core) instance with layout and home page template already in place for you. It also includes a copy of our boilerplate client side stack. You are free to use any frameworks / libraries that you wish but it would be preferred it you would work within our boilplate framework. The framework includes [Bourbon](http://bourbon.io/) and [Neat](http://neat.bourbon.io/) as well as a Gulp build process for code compilation and concatenation. There are no JavaScript libraries or frameworks included, just a single main.js file. Please feel free to utilise any JavaScript resources that you feel are appropriate, both [Bower](http://bower.io/) and [NPM](https://www.npmjs.com/) are included and alrady in use to install the boilerplate codebase dependencies.

### Requirements ####

Firstly, if you do not already have them, you will need to install the latest versions of the following:

- [Node](http://nodejs.org/)
- [NPM](https://www.npmjs.org/)
- [Gulp](http://gulpjs.com/)
- [Bower](http://bower.io/)
- [Ruby](https://www.ruby-lang.org/en/)
- [Sass](http://sass-lang.com/)

### Install ###

The project must run on a LAMP stack. We love [Vagrant](https://www.vagrantup.com/) but [MAMP](http://www.mamp.info/) is an quick and easy option. Set up a localhost and drop in the `ds-assignment` folder.

Next create a database for the project and import the `ds-assignment.sql` file.

You'll need to create a virtual host for the project, for example `ds-assignment.dev`. Point the virtual host document root to `ds-assignment/public_html`. 

Open up the root folder in your favorite code editor (we love [Sublime Text](http://www.sublimetext.com/)!). The Expression Engine instance includes Focus Lab's [Master Config](https://github.com/focuslabllc/ee-master-config). Open `config/config.env.php` and check out the `HTTP_HOST` switch statement. 

    switch (strtolower($_SERVER['HTTP_HOST'])) {

		// example configuration
		// catch ds-assignment.ac.dsdev virtual host
		// set environment to 'ac'
		// this will load the config.ac.php file for configuration
		case 'ds-assignment.ac.dsdev' :
		
		    // environment name, used to load config file
			define('ENV', 'ac');
			
			// full environment name
			define('ENV_FULL', 'AC Development');
			
			// turn on EE debugging
			define('ENV_DEBUG', TRUE);
			
		break;

		default :
			define('ENV', 'local');
			define('ENV_FULL', 'Local');
			define('ENV_DEBUG', TRUE);
		break;
	}

You can copy and edit the first `case` to catch your localhost. The value of the `ENV` constant is the name of your local environment and will be used to fire up your configuration file. Copy `config/config.ac.php` and rename, switching `ac` to match your local `ENV`. You can then add the database credentials required to access the database you created ealier.

	$env_db['hostname'] = 'localhost';
	$env_db['username'] = 'root';
	$env_db['password'] = 'root';
	$env_db['database'] = 'ds-assignment';

You should now be good to fire up [http://ds-assignment.dev](http://ds-assignment.dev), or whatever you used as your virtual host, and see the layout template and home page rendered on the screen. The Expression Engine control panel can be found at [http://ds-assignment.dev/ds-cp](http://ds-assignment.dev/ds-cp), username `admin`, password `password`.

Next up, the front end. First install all client side dependencies.

	$ npm install
	$ bower install

You can then run gulp from the project root to compile the source.

	$ gulp

Gulp watch will run LiveReload and compile as you get building!

	$ gulp watch
	

### Components ###

You will find `components` directories within `public_html/src/scss` and `public_html/src/js`. The idea behind this is to organise your code into modular components. You are free to use any frameworks, libraries or design patterns that you wish, however Bourbon, Neat and this component driven design pattern is how we work at Digital Surgeons.

### UI ###

The [http://ds-assignment.dev/ui.html](http://ds-assignment.dev/ui.html) file contains examples of basic typography and other styles that come with Bitters as well as examples of some components.

### Additional Information ###

- [ExpressionEngine User Guide](https://ellislab.com/expressionengine/user-guide/)
- [Package builder for EE add-ons](http://pkg.i]o/)


## Good luck and stay in touch! ##

Please feel free to ask any questions you may have, installation, coding styles or any part of the build. Your point of contact for the assignment is [Adam Chambers](mailto:ac@digitalsurgeons.com). Good luck with the assignment, we look forward to hearing from you soon!













