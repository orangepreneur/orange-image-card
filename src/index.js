import { registerBlockType } from '@wordpress/blocks';

import './style.scss';

import Edit from './edit';
import save from './save';

registerBlockType( 'orange-image-card/orange-image-card', {
	apiVersion: 2,
	attributes: {
		title: {
			type: 'string',
			default: 'This is a Title',
		},
		mediaUrl: {
			type: 'string',
			default: 'http://via.placeholder.com/300',
		},
		content: {
			type: 'string',
			default: 'Click to edit the content',
		},
	},
	edit: Edit,
	save,
} );
