<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'db_nyc' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'kfYLx-GvNbUX%.smvxCPLpvx0uQqDz#trg3(,fUKH1WFqBIX4dA=x` eY|W+=&1G' );
define( 'SECURE_AUTH_KEY',  'Z~*$m9 MGZ|E-E4L,S0@y/Un{B}0/5ayb9RLC]2RlJz ]y%1fIBj/xo`[|:6p-:(' );
define( 'LOGGED_IN_KEY',    'i)8~^T]32u31f#(82}SY}.R9a~-GvSzcxFnud{KG@2R7Br1NT/A0l1Y`l5Y{c@eU' );
define( 'NONCE_KEY',        'pB[oD^, KH>jKt:[h5Jb |@<rqy4TGk#+V,uU$gY<S4;TIn{H4?Zq&PYB:RXfn!=' );
define( 'AUTH_SALT',        'qxOv?oq)ER&#H~)@Z`,oxoo(NBC__!%5s|A/qDmK1nST^yUhB(5MCk}mPh7Y RCW' );
define( 'SECURE_AUTH_SALT', ' WprkvM:P5k`{)Bg|<[}N.PDsP,]ru1wlBW o|e%Imj:v@m%28Biphx<HHZ*zgQ^' );
define( 'LOGGED_IN_SALT',   'jJSd7l(3XBi.xw}p8iv5G=juO%<&2X<R+0IJA_;{tq0%OTUH|eh}0d~wQB^b2zN.' );
define( 'NONCE_SALT',       '5gJ$/>=]]l)fGMbkG2R.}3ueOh]Xxb22Q{$uhO^)3Oj(-@Z8h#mA[Wb#6o~F)9W$' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'tb_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
