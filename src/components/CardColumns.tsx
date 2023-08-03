import React from "react";
import Button from "./basic/Button";
import Card from "./card/Card";
import { CardProps } from "./card/card_util";

interface CardColumnsProps {
	cardsData: CardProps[];
}

function CardColumns(props: CardColumnsProps) {
	return (
		<div className="h-full w-full flex flex-row gap-4">
			<div className="w-1/2 h-fit  flex flex-col gap-4">
				{props.cardsData.map((cardData, i) => {
					if (i % 2 === 0)
						return (
							<Card
								name={cardData.name}
								textContent={cardData.textContent}
								category={cardData.category}
								status={cardData.status}
								author={cardData.author}
							></Card>
						);
					else return <></>;
				})}
			</div>
			<div className="w-1/2 h-fit bg-side-nav-header">
				{props.cardsData.map((cardData, i) => {
					if (i % 2 === 1)
						return (
							<Card
								name={cardData.name}
								textContent={cardData.textContent}
								category={cardData.category}
								status={cardData.status}
								author={cardData.author}
							></Card>
						);
					else return <></>;
				})}
			</div>
		</div>
	);
}

export default CardColumns;
