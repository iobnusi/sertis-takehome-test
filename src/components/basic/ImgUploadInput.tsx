import PhotoSvg from "../svgs/PhotoSvg";

interface LineProps {
	className?: string;
	onUpload: (fileList: File) => void;
}
function ImgUploadInput(props: LineProps) {
	return (
		<div className="h-8 w-8 hover:bg-button-hover flex items-center justify-center rounded-full">
			<label htmlFor="img-uploader" className="">
				<PhotoSvg className="h-6 w-6 stroke-card-title"></PhotoSvg>
			</label>
			<input
				id="img-uploader"
				type="file"
				className="hidden"
				onChange={(e) => {
					if (!e.target.files) return;
					else props.onUpload(e.target.files[0]);
				}}
			/>
		</div>
	);
}

export default ImgUploadInput;
