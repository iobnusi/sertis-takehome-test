import CloseSvg from "../svgs/CloseSvg";
import PhotoSvg from "../svgs/PhotoSvg";
import Button from "./Button";

interface ImgPreviewProps {
	className?: string;
	file: string;
	disableClose: boolean;
	onRemove: () => void;
}
function ImgPreview(props: ImgPreviewProps) {
	return (
		<div className="relative">
			{!props.disableClose ? (
				<Button
					onClick={() => props.onRemove()}
					className="absolute h-8 w-8 right-3 top-3 bg-image-close rounded-full flex items-center justify-center"
				>
					<CloseSvg className="h-6 w-6 stroke-white"></CloseSvg>
				</Button>
			) : null}

			<img
				className="object-contain h-full rounded-lg"
				src={props.file}
				alt="preview"
			></img>
		</div>
	);
}

export default ImgPreview;
