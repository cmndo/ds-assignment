<?php

/**
 * Environment Declaration
 *
 * This switch statement sets our environment. The environment is used primarily
 * in our custom config file setup. It is also used, however, in the front-end
 * index.php file and the back-end admin.php file to set the debug mode
 *
 * @package    Focus Lab Master Config
 * @version    1.1.1
 * @author     Focus Lab, LLC <dev@focuslabllc.com>
 */

if ( ! defined('ENV'))
{
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
		case 'arccos-promo.abs.dsdev' :
			// environment name, used to load config file
			define('ENV', 'abs');

			// full environment name
			define('ENV_FULL', 'ABS Development');

			// turn on EE debugging
			define('ENV_DEBUG', TRUE);
		break;

		default :
			define('ENV', 'local');
			define('ENV_FULL', 'Local');
			define('ENV_DEBUG', TRUE);
		break;
	}
}

/* End of file config.env.php */
/* Location: ./config/config.env.php */
