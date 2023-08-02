import React from "react";

interface CardProps {
	title: string;
	textContent: string;
}
function Card(props: CardProps) {
	return (
		<div className="bg-white p-5 flex flex-col gap-2 w-full h-fit">
			<p className="font-bold text-xs text-card-title">{props.title}</p>
			<p className="text-lg text-card-body">{props.textContent}</p>
		</div>
	);
}

export default Card;
