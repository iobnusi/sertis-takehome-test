import { useState } from "react";
import SideNavbar from "./components/SideNavbar";
import Board from "./components/Board";
import "./App.css";
import { CardCategory } from "./components/card/card_util";
import { User } from "./components/utils/user_util";
import { FormState } from "./components/card/form_reducer";
import { v4 as uuidv4 } from "uuid";
import { mockCardsData } from "./components/utils/mock_data";

function App() {
	const mockCurrentUser: User = {
		id: "91c5f082-32a4-11ee-be56-0242ac120002",
		name: "Eisen Lance De Guzman",
	};
	const [filterCategory, setFilterCategory] = useState<CardCategory | null>(
		null
	);
	const [cardsData, setCardsData] = useState(mockCardsData);
	const [latestCardId, setLatestCardId] = useState<string>("");

	const createCard = (formState: FormState) => {
		const newCardId = uuidv4();
		setLatestCardId(newCardId);
		setCardsData([
			{
				category: formState.category,
				content: formState.content,
				name: formState.name,
				status: formState.status,
				imgSrc: formState.imgSrc,
				datePosted: new Date(),
				commentCount: 0,
				likes: 0,
				author: mockCurrentUser, // user is independent from the formState and is based on mock user data
				id: newCardId, // create a unique id
			},
			...cardsData,
		]);
	};

	const editCard = (formState: FormState) => {
		setCardsData(
			cardsData.map((card) => {
				if (card.id === formState.id) {
					return {
						category: formState.category,
						content: formState.content,
						name: formState.name,
						status: formState.status,
						imgSrc: formState.imgSrc,
						datePosted: new Date(),
						commentCount: card.commentCount,
						likes: card.likes,
						author: card.author,
						id: card.id,
					};
				} else return card;
			})
		);
	};

	const deleteCard = (cardId: string) => {
		setCardsData((prevCardsData) =>
			prevCardsData.filter((card) => card.id !== cardId)
		);
	};
	return (
		<div
			className={`scrollbar1 center h-screen tablet:w-full desktop:w-[840px] shrink-0 bg-board absolute left-0 flex flex-row`}
		>
			<SideNavbar
				user={mockCurrentUser}
				cardsData={cardsData}
				onSelectFilterCategory={(category: CardCategory) => {
					setFilterCategory(category);
				}}
				onDeselectFilterCategory={() => {
					setFilterCategory(null);
				}}
			></SideNavbar>
			<Board
				user={mockCurrentUser}
				cardsData={cardsData}
				latestCardId={latestCardId}
				filterCategory={filterCategory}
				createCard={createCard}
				deleteCard={deleteCard}
				editCard={editCard}
			></Board>
		</div>
	);
}

export default App;
