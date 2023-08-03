import React, { ReactNode } from "react";

interface ButtonProps {
	children?: ReactNode;
	className?: string;
}
function Line(props: ButtonProps) {
	return (
		<div className={`h-[1px] w-full bg-card-body ${props.className}`}></div>
	);
}

export default Line;
