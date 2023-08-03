import React from "react";
import { SvgProps } from "./svg_util";

function CircleSvg(props: SvgProps) {
	return (
		<svg
			className={props.className}
			version="1.1"
			id="icon"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 32 32"
		>
			<rect
				id="_Transparent_Rectangle_"
				className="fill-none"
				width="32"
				height="32"
			/>
			<path
				d="M16,2C8.3,2,2,8.3,2,16s6.3,14,14,14s14-6.3,14-14S23.7,2,16,2z M16,22c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S19.3,22,16,22
	z"
			/>
			<path
				id="inner-path"
				className="opacity-0"
				d="M16,10c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S19.3,10,16,10z"
			/>
		</svg>
	);
}

export default CircleSvg;
