import React, { ReactNode } from "react";

interface ButtonProps {
	children?: ReactNode;
	className?: string;
}
function Button(props: ButtonProps) {
	return <button className={props.className}>{props.children}</button>;
}

export default Button;
