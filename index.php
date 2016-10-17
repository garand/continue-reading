<?php
/*
 * Plugin Name: Continue Reading
 * Version: 1.0
 * Plugin URI: http://garand.me
 * Description: Show "Continue Reading" button on single article pages
 * Author: Anthony Garand
 * Author URI: http://garand.me
 * Requires at least: 4.0
 * Tested up to: 4.0
 *
 * @package WordPress
 * @author Anthony Garand
 * @since 1.0.0
 */

add_filter( 'the_content', 'add_continue_reading_button', 10 );
/**
 * Add "Continue Reading" button to replace <!--more--> tag
 *
 * @uses is_single()
 */
function add_continue_reading_button( $content ) {

	if ( is_single() ) {

		wp_register_style('continue-reading-style', plugins_url('continue-reading.css',__FILE__ ));
		wp_register_script('continue-reading-script', plugins_url('continue-reading.js',__FILE__ ));
		wp_enqueue_style('continue-reading-style');	
		wp_enqueue_script('continue-reading-script');	
	
		$continue_reading = '
			<p class="continueReading--button-container">
				<button class="continueReading--button">Continue Reading</button>
			</p>
			<div class="continueReading--hidden">
		';

		$content = preg_replace( '/<p><span id=\"(.*?)\">(.*?)<\/span><\/p>/', $continue_reading, $content );

		$content .= '</div>';

	}

	// Returns the content.
	return $content;
}
