import React, { useState } from "react";
import Button from "./basic/Button";
import CardColumns from "./CardColumns";
import { CardProps } from "./card/card_util";
import CardForm from "./card/CardForm";
import { FormState } from "./card/form_reducer";

interface BoardProps {
	cards: CardProps[];
	className?: string;
}

function Board(props: BoardProps) {
	const navButtons = ["Activity", "Users", "Groups"];
	const [cards, setCards] = useState(props.cards);

	const handleSubmit = (formState: FormState) => {
		console.log("new card added", formState);
		setCards([
			{
				category: formState.category,
				content: formState.content,
				author: formState.author,
				name: formState.name,
				status: formState.status,
				datePosted: new Date(),
			},
			...cards,
		]);
	};
	return (
		<div className="h-screen w-full flex flex-col   ">
			<header
				className={`${props.className} h-[90px] bg-white flex flex-row px-4`}
			>
				{navButtons.map((name) => {
					return (
						<Button className="w-[150px] font-thin text-3xl text-card-body ">
							{name}
						</Button>
					);
				})}
			</header>
			<div className="  p-4 overflow-auto flex flex-col gap-4  ">
				<CardForm handleSubmit={handleSubmit}></CardForm>
				<CardColumns cardsData={cards}></CardColumns>
			</div>
		</div>
	);
}

export default Board;
