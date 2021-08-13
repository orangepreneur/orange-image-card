import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	MediaUpload,
	InspectorControls,
} from "@wordpress/block-editor";
import {
	Placeholder,
	TextControl,
	Button,
	CheckboxControl,
} from "@wordpress/components";
import "./editor.scss";
import { useState } from "@wordpress/element";

export default function Edit({ attributes, isSelected, setAttributes }) {
	const [isDimChecked, setDimChecked] = useState(attributes.dim_bg);
	const [isBlurChecked, setBlurChecked] = useState(attributes.blur);
	const [isZoomChecked, setZoomChecked] = useState(attributes.zoom);

	const dimBackgroundCheck = (value) => {
		setDimChecked(value);
		setAttributes({ dim_bg: value });
	};

	const blurBackgroundCheck = (value) => {
		setBlurChecked(value);
		setAttributes({ blur: value });
	};

	const zoomBackgroundCheck = (value) => {
		setZoomChecked(value);
		setAttributes({ zoom: value });
	};
	const getImageClasses = () => {
		const classes = [];
		if (attributes.dim_bg) classes.push("dim_bg");
		if (attributes.blur) classes.push("blur_bg");
		if (attributes.zoom) classes.push("zoom_bg");
		return classes.join(" ");
	};

	return (
		<div {...useBlockProps()}>
			<InspectorControls key="setting">
				<fieldset class="sidebarOption">
					<CheckboxControl
						label="Dim Background on Hover"
						help="It makes the text more readable"
						checked={isDimChecked}
						onChange={(value) => dimBackgroundCheck(value)}
					/>
				</fieldset>
				<fieldset class="sidebarOption">
					<CheckboxControl
						label="Blur Image on Hover"
						help="It makes the text more readable"
						checked={isBlurChecked}
						onChange={(value) => blurBackgroundCheck(value)}
					/>
				</fieldset>
				<fieldset class="sidebarOption">
					<CheckboxControl
						label="Zoom Image on Hover"
						help="It looks clean and interactive"
						checked={isZoomChecked}
						onChange={(value) => zoomBackgroundCheck(value)}
					/>
				</fieldset>
			</InspectorControls>
			{isSelected ? (
				<Placeholder label="Beautiful Image Card">
					<MediaUpload
						onSelect={(media) =>
							setAttributes({ mediaUrl: media.sizes.full.url })
						}
						type="image"
						render={({ open }) =>
							attributes.mediaUrl ? (
								<img
									className="previewImage"
									onClick={open}
									src={attributes.mediaUrl}
								/>
							) : (
								<Button onClick={open}> Upload Image</Button>
							)
						}
					/>
					<div>
						<p>Enter Title </p>
						<TextControl
							value={attributes.title}
							onChange={(val) => setAttributes({ title: val })}
						/>
					</div>
					<div>
						<p>Enter Content </p>
						<TextControl
							value={attributes.content}
							onChange={(val) => setAttributes({ content: val })}
						/>
					</div>
				</Placeholder>
			) : (
				<div class="orangewp-image-card">
					<img src={attributes.mediaUrl} class={getImageClasses()} />
					<div class="content">
						<h3>{attributes.title}</h3>
						<p>{attributes.content}</p>
					</div>
				</div>
			)}
		</div>
	);
}
