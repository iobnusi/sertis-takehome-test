import React, { useState } from "react";
import Button from "./basic/Button";
import Card from "./card/Card";
import CardColumns from "./CardColumns";
import { CardCategory, CardProps } from "./card/card_util";
import CardForm from "./card/CardForm";

interface BoardProps {
	cards: CardProps[];
}

function Board(props: BoardProps) {
	const navButtons = ["Activity", "Users", "Groups"];
	const [cards, setCards] = useState(props.cards);

	const handleSubmit = (newCardProps: CardProps) => {
		console.log("new card added", newCardProps);
		setCards([newCardProps, ...cards]);
	};
	return (
		<div className="h-screen w-full flex flex-col   ">
			<header className="h-[90px] bg-white shrink-0 flex flex-row px-4">
				{navButtons.map((name) => {
					return (
						<Button className="w-[150px] font-thin text-3xl text-card-body ">
							{name}
						</Button>
					);
				})}
			</header>
			<div className="grow p-4 overflow-auto flex flex-col gap-4 ">
				<CardForm handleSubmit={handleSubmit}></CardForm>
				<CardColumns cardsData={cards}></CardColumns>
			</div>
		</div>
	);
}

export default Board;
