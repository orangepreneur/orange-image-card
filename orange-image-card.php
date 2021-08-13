<?php

/**
 * Plugin Name:       Beautiful Image Card
 * Description:       A simple and clean Image card which will show content on hover.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.0.1
 * Author:            Mukesh Joshi
 * Author URI:        https://iammukesh.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       orange-image-card
 *
 * @package           orange-image-card
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function orange_image_card_orange_image_card_block_init()
{
	register_block_type(__DIR__);
}
add_action('init', 'orange_image_card_orange_image_card_block_init');
