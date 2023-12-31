import { ReactNode } from "react";

interface ButtonProps {
	children?: ReactNode;
	disabled?: boolean;
	className?: string;
	onClick?: () => void;
}
function Button(props: ButtonProps) {
	return (
		<button
			className={`${props.className} hover:bg-button-hover`}
			onClick={props.onClick}
			disabled={props.disabled}
		>
			{props.children}
		</button>
	);
}

export default Button;
