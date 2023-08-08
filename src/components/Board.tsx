import { useEffect, useState } from "react";
import Button from "./basic/Button";
import CardColumns from "./CardColumns";
import { CardCategory, CardData } from "./card/card_util";
import CardForm from "./card/CardForm";
import { FormState, emptyFormState } from "./card/form_reducer";
import { User } from "./utils/user_util";
import CardEditModal from "./modal/CardEditModal";
import CardDeleteModal from "./modal/CardDeleteModal";

interface BoardProps {
	cardsData: CardData[];
	latestCardId: string;
	user: User;
	className?: string;
	filterCategory: CardCategory | null;
	createCard: (formState: FormState) => void;
	editCard: (formState: FormState) => void;
	deleteCard: (cardId: string) => void;
}

function Board(props: BoardProps) {
	const navButtons = ["Activity", "Users", "Groups"];
	const [editFormState, setEditFormState] = useState(emptyFormState);
	const [isEditModalOpen, setEditModalOpen] = useState(false);

	const handleCreate = (formState: FormState) => {
		props.createCard(formState);
	};

	const handleUpdate = (formState: FormState) => {
		props.editCard(formState);
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
		<div className="h-screen w-full flex flex-col min-w-[250px]">
			<header
				className={`${props.className} h-[90px] shrink-0 bg-white flex flex-row gap-10 px-10`}
			>
				{navButtons.map((name) => {
					return (
						<li key={name} className="desktop:w-[100px] list-none">
							<Button className="h-full w-full font-thin mobile:text-xl tablet:text-3xl text-card-body ">
								{name}
							</Button>
						</li>
					);
				})}
			</header>
			<div className="mobile:p-2 desktop:p-4 overflow-auto flex flex-col h-full desktop:gap-4 mobile:gap-2 ">
				<CardForm
					className="z-0 mobile:p-3 tablet:p-5"
					author={props.user}
					handleSubmit={handleCreate}
					textAreaRows={1}
					submitButtonCondition={(formState) => {
						return formState.content === "" || !formState.category;
					}}
				></CardForm>
				<CardColumns
					currentUser={props.user}
					cardsData={props.cardsData}
					latestCardId={props.latestCardId}
					filterCategory={props.filterCategory}
					editCallback={openCardEditModal}
					deleteCallback={props.deleteCard}
				></CardColumns>
				<CardEditModal
					isOpen={isEditModalOpen}
					author={props.user}
					formState={editFormState}
					handleClose={() => setEditModalOpen(false)}
					handleUpdate={handleUpdate}
				></CardEditModal>
			</div>
		</div>
	);
}

export default Board;
