import React, { useState } from "react";
import Button from "./basic/Button";
import CardColumns from "./CardColumns";
import { CardData } from "./card/card_util";
import CardForm from "./card/CardForm";
import { FormState } from "./card/form_reducer";
import { User } from "./utils/user_util";

interface BoardProps {
	cardsData: CardData[];
	user: User;
	className?: string;
}

function Board(props: BoardProps) {
	const navButtons = ["Activity", "Users", "Groups"];
	const [cardsData, setCardsData] = useState(props.cardsData);

	const handleSubmit = (formState: FormState, author: User) => {
		console.log("new card added", formState);
		setCardsData([
			{
				category: formState.category,
				content: formState.content,
				name: formState.name,
				status: formState.status,
				datePosted: new Date(),
				commentCount: 0,
				likes: 0,
				author: author,
			},
			...cardsData,
		]);
	};
	return (
		<div className="h-screen w-full flex flex-col">
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
				<CardForm
					currentUser={props.user}
					handleSubmit={handleSubmit}
				></CardForm>
				<CardColumns
					currentUser={props.user}
					cardsData={cardsData}
				></CardColumns>
			</div>
		</div>
	);
}

export default Board;
