import { __ } from "@wordpress/i18n";
import { useBlockProps, MediaUpload } from "@wordpress/block-editor";
import { Placeholder, TextControl, Button } from "@wordpress/components";
import "./editor.scss";

export default function Edit({ attributes, isSelected, setAttributes }) {
	return (
		<div {...useBlockProps()}>
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
					<img src={attributes.mediaUrl} />
					<div class="content">
						<h3>{attributes.title}</h3>
						<p>{attributes.content}</p>
					</div>
				</div>
			)}
		</div>
	);
}
