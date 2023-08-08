import { SvgProps } from "./svg_util";

function EllipsisSvg(props: SvgProps) {
	return (
		<svg
			className={props.className}
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth="1.5"
			stroke="currentColor"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
			/>
		</svg>
	);
}

export default EllipsisSvg;
