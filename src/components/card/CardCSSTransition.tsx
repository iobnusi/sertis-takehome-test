import { ReactNode } from "react";
import { CSSTransition } from "react-transition-group";

interface CardCSSTransitionProps {
	children: ReactNode;
	className?: string;
	in: boolean;
	timeout: number;
	classNames: string;
	enter: boolean;
	exit: boolean;
}
function CardCSSTransition(props: CardCSSTransitionProps) {
	if (props.enter)
		return (
			<CSSTransition
				in={props.in}
				timeout={props.timeout}
				classNames={"card"}
				enter={true}
				exit={true}
			>
				{props.children}
			</CSSTransition>
		);
	else
		return (
			<CSSTransition
				in={props.in}
				timeout={props.timeout}
				classNames={"card"}
				enter={false}
				exit={true}
			>
				{props.children}
			</CSSTransition>
		);
}

export default CardCSSTransition;
