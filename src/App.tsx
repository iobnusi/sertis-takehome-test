import React, { useEffect, useState } from "react";
import SideNavbar from "./components/SideNavbar";
import Board from "./components/Board";
import "./App.css";
import {
	CardCategory,
	CardData,
	CardProps,
	CardStatus,
} from "./components/card/card_util";
import { User } from "./components/utils/user_util";

function App() {
	const [filterCategory, setFilterCategory] = useState<CardCategory | null>(
		null
	);

	const currentUser: User = {
		id: "91c5f082-32a4-11ee-be56-0242ac120002",
		name: "Eisen Lance De Guzman",
	};
	const mockCardsData: CardData[] = [
		{
			id: "ee0d4da8-9564-4ed2-ab58-9379594f0637",
			category: CardCategory.biology,
			content:
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, cumque ab veritatis quasi nihil temporibus corrupti veniam autem aperiam, adipisci et repudiandae. Natus deleniti tempora dolore, sit vero voluptate necessitatibus?",
			author: {
				id: "b1f37fea-32a5-11ee-be56-0242ac120002",
				name: "Tereza Konecna",
			},
			name: "Card Name",
			status: CardStatus.interesting,
			commentCount: 10,
			datePosted: new Date("1995-12-17T03:24:00"),
			likes: 58,
		},
	];

	return (
		<div
			className={`scrollbar1 center h-screen w-[840px] bg-board absolute left-0 flex flex-row`}
		>
			<SideNavbar
				key="side-navbar"
				user={currentUser}
				onSelectFilterCategory={(category: CardCategory) => {
					setFilterCategory(category);
				}}
				onDeselectFilterCategory={(category: CardCategory) => {
					setFilterCategory(null);
				}}
			></SideNavbar>
			<Board
				user={currentUser}
				cardsData={mockCardsData}
				filterCategory={filterCategory}
			></Board>
		</div>
	);
}

export default App;
