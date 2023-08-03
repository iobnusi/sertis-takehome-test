import React, { ReactNode, useEffect, useRef, useState } from "react";
import autosize from "autosize";

interface TextAreaProps {
	children?: ReactNode;
	className?: string;
	placeholder?: string;
	rows?: number;
	value: string;
	onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
function TextArea(props: TextAreaProps) {
	const textAreaRef = useRef<any>(null);

	useEffect(() => {
		autosize(textAreaRef.current);
	}, []);
	return (
		<textarea
			className={props.className}
			placeholder={props.placeholder}
			rows={props.rows ?? 1}
			ref={textAreaRef}
			onChange={props.onChange}
			value={props.value}
		>
			{props.children}
		</textarea>
	);
}

export default TextArea;
