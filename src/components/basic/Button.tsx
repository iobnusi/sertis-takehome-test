import React, { ReactNode } from "react";

interface ButtonProps {
	children?: ReactNode;
	className?: string;
	onClick?: () => void;
}
function Button(props: ButtonProps) {
	return (
		<button className={props.className} onClick={props.onClick}>
			{props.children}
		</button>
	);
}

export default Button;
