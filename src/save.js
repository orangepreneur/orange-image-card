import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
export default function save({ attributes }) {
	return (
		<div {...useBlockProps.save()}>
			<div class="orangewp-image-card">
				<img src={attributes.mediaUrl} alt={attributes.title} />
				<div class="content">
					<h3>{attributes.title}</h3>
					<p>{attributes.content}</p>
				</div>
			</div>
		</div>
	);
}
