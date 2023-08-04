import React from "react";
import Button from "./basic/Button";
import Card from "./card/Card";
import { CardProps } from "./card/card_util";

interface CardColumnsProps {
	cardsData: CardProps[];
}

function CardColumns(props: CardColumnsProps) {
	return (
		<div className="h-full w-full flex flex-row gap-4 ">
			<div className="w-[calc(50%-8px)] h-fit  flex flex-col gap-4 shrink-0">
				{props.cardsData.map((cardData, i) => {
					if (i % 2 === 0)
						return (
							<Card
								name={cardData.name}
								content={cardData.content}
								category={cardData.category}
								status={cardData.status}
								author={cardData.author}
								datePosted={cardData.datePosted}
								commentCount={cardData.commentCount}
								likes={cardData.likes}
							></Card>
						);
					else return <></>;
				})}
			</div>
			<div className="w-[calc(50%-8px)] h-fit flex flex-col gap-4 shrink-0">
				{props.cardsData.map((cardData, i) => {
					if (i % 2 === 1)
						return (
							<Card
								name={cardData.name}
								content={cardData.content}
								category={cardData.category}
								status={cardData.status}
								author={cardData.author}
								datePosted={cardData.datePosted}
								commentCount={cardData.commentCount}
								likes={cardData.likes}
							></Card>
						);
					else return <></>;
				})}
			</div>
		</div>
	);
}

export default CardColumns;
