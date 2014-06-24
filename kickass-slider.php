<?php
/*
Plugin Name: KickAss Slider
Plugin URI: http://jashwant.github.io/kickass-slider
Description: Slider having CSS3 animations ( with jQuery fallback ) and drag n drop UI.
Version: 1.2
Author: Jashwant Singh Chaudhary
Author URI: http://www.jashwant.com
*/	
    
// Make sure we don't expose any info if called directly
if ( !function_exists( 'add_action' ) ) {
	echo "Hi, I hate PHP, but I love wordpress";
	exit;
}

// Include the file with plugin class
require_once('class.kickass-slider.php'); 

// Initialise the class and thus invoke constructor
$kickAssSlider = new KickAssSlider( __FILE__ ,'1.2');
?>