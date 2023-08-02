import React from "react";
import Button from "./Button";
import Card from "./Card";

interface CardColumnsProps {
	cards: React.ReactNode[];
}

function CardColumns(props: CardColumnsProps) {
	return (
		<div className="h-full w-full flex flex-row gap-4">
			<div className="w-1/2 h-fit  flex flex-col gap-4">
				{props.cards.map((card, i) => {
					if (i % 2 === 0) return card;
					else return <></>;
				})}
			</div>
			<div className="w-1/2 h-fit bg-side-nav-header">
				{props.cards.map((card, i) => {
					if (i % 2 === 1) return card;
					else return <></>;
				})}
			</div>
		</div>
	);
}

export default CardColumns;
