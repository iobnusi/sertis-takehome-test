import React from "react";
import { SvgProps } from "./svg_util";

function PlusSvg(props: SvgProps) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth="2"
			stroke="currentColor"
			className={props.className}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M12 6v12m6-6H6"
			/>
		</svg>
	);
}

export default PlusSvg;
