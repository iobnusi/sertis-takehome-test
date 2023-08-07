import React, { ReactNode } from "react";

interface ButtonProps {
	children?: ReactNode;
	className?: string;
}
function CloseSvg(props: ButtonProps) {
	return (
		<svg
			className={props.className}
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M6 18L18 6M6 6l12 12"
			/>
		</svg>
	);
}

export default CloseSvg;
