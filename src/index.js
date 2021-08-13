import { registerBlockType } from "@wordpress/blocks";

import "./style.scss";

import Edit from "./edit";
import save from "./save";

registerBlockType("orange-image-card/orange-image-card", {
	apiVersion: 2,
	attributes: {
		title: {
			type: "string",
			default: "This is a Title",
		},
		mediaUrl: {
			type: "string",
			default: "http://via.placeholder.com/300?text=Click to Edit",
		},
		content: {
			type: "string",
			default: "Click to edit the content",
		},
		dim_bg: {
			type: "boolean",
			default: true,
		},
		blur: {
			type: "boolean",
			default: true,
		},
		zoom: {
			type: "boolean",
			default: true,
		},
	},
	edit: Edit,
	example: {
		attributes: {
			mediaUrl: "./src/example.jpeg",
		},
	},
	save,
});
