import { useState } from "react";
import Button from "./basic/Button";
import CardColumns from "./CardColumns";
import { CardData } from "./card/card_util";
import CardForm from "./card/CardForm";
import { FormState, emptyFormState } from "./card/form_reducer";
import { User } from "./utils/user_util";
import CardEditModal from "./modal/CardEditModal";
import { v4 as uuidv4 } from "uuid";

interface BoardProps {
	cardsData: CardData[];
	user: User;
	className?: string;
}

function Board(props: BoardProps) {
	const navButtons = ["Activity", "Users", "Groups"];
	const [editFormState, setEditFormState] = useState(emptyFormState);
	const [cardsData, setCardsData] = useState(props.cardsData);
	const [isEditModalOpen, setEditModalOpen] = useState(false);

	const handleCreate = (formState: FormState) => {
		setCardsData([
			{
				category: formState.category,
				content: formState.content,
				name: formState.name,
				status: formState.status,
				datePosted: new Date(),
				commentCount: 0,
				likes: 0,
				author: props.user, // user is independent from the formState and is based on Board props
				id: uuidv4(), // create a unique id
			},
			...cardsData,
		]);
	};

	const handleUpdate = (formState: FormState) => {
		// find index of the card in the cardsData array and update its info form the given formstate
		setCardsData(
			cardsData.map((card) => {
				if (card.id === formState.id) {
					return {
						category: formState.category,
						content: formState.content,
						name: formState.name,
						status: formState.status,
						datePosted: new Date(),
						commentCount: card.commentCount,
						likes: card.likes,
						author: card.author,
						id: card.id,
					};
				} else return card;
			})
		);
		setEditModalOpen(false);
	};

	const openCardEditModal = (cardFormState: FormState) => {
		setEditFormState({
			id: cardFormState.id,
			category: cardFormState.category,
			content: cardFormState.content,
			name: cardFormState.name,
			status: cardFormState.status,
		});
		setEditModalOpen(true);
	};
	return (
		<div className="h-screen w-full flex flex-col">
			<header
				className={`${props.className} h-[90px] shrink-0 bg-white flex flex-row px-4`}
			>
				{navButtons.map((name) => {
					return (
						<Button className="w-[150px] font-thin text-3xl text-card-body ">
							{name}
						</Button>
					);
				})}
			</header>
			<div className="p-4 overflow-auto flex flex-col gap-4">
				<CardForm
					className="p-5"
					handleSubmit={handleCreate}
					textAreaRows={1}
					submitButtonCondition={(formState) => {
						return formState.content === "" || !formState.category;
					}}
				></CardForm>
				<CardColumns
					currentUser={props.user}
					cardsData={cardsData}
					editCallback={openCardEditModal}
				></CardColumns>
				<CardEditModal
					isOpen={isEditModalOpen}
					formState={editFormState}
					handleClose={() => setEditModalOpen(false)}
					handleUpdate={handleUpdate}
				></CardEditModal>
			</div>
		</div>
	);
}

export default Board;
