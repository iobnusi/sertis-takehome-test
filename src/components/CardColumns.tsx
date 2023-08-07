import Card from "./card/Card";
import { CardCategory, CardData } from "./card/card_util";
import { User } from "./utils/user_util";
import { FormState } from "./card/form_reducer";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";
import "../App.css";

interface CardColumnsProps {
	key: string;
	cardsData: CardData[];
	currentUser: User;
	filterCategory: CardCategory | null;

	editCallback: (cardFormState: FormState) => void;
	deleteCallback: (cardId: string) => void;
}

function CardColumns(props: CardColumnsProps) {
	return (
		<div key={props.key} className="h-full w-full flex flex-row gap-4 ">
			<div className="w-[calc(50%-8px)] h-fit  flex flex-col gap-4 shrink-0">
				{props.cardsData
					.filter(
						(card) =>
							card.category === props.filterCategory ||
							props.filterCategory === null
					)
					.map((cardData, i) => {
						if (i % 2 === 0)
							return (
								<Card
									key={`card-${cardData.id}`}
									data={cardData}
									isEditable={
										props.currentUser.id ===
										cardData.author.id
									}
									editCallback={props.editCallback}
									deleteCallback={props.deleteCallback}
								></Card>
							);
						else return <></>;
					})}
			</div>
			<div className="w-[calc(50%-8px)] h-fit flex flex-col gap-4 shrink-0">
				{props.cardsData
					.filter(
						(card) =>
							card.category === props.filterCategory ||
							props.filterCategory === null
					)
					.map((cardData, i) => {
						if (i % 2 === 1)
							return (
								<Card
									key={`card-${cardData.id}`}
									data={cardData}
									isEditable={
										props.currentUser.id ===
										cardData.author.id
									}
									editCallback={props.editCallback}
									deleteCallback={props.deleteCallback}
								></Card>
							);
						else return <></>;
					})}
			</div>
		</div>
	);
}

export default CardColumns;
