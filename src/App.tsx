import React from "react";
import SideNavbar from "./components/SideNavbar";
import Board from "./components/Board";
import "./App.css";
import { CardCategory, CardData, CardProps } from "./components/card/card_util";
import { User } from "./components/utils/user_util";

function App() {
	const currentUser: User = {
		id: "91c5f082-32a4-11ee-be56-0242ac120002",
		name: "Eisen Lance De Guzman",
	};
	const mockCardsData: CardData[] = [
		{
			category: CardCategory.biology,
			content:
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, cumque ab veritatis quasi nihil temporibus corrupti veniam autem aperiam, adipisci et repudiandae. Natus deleniti tempora dolore, sit vero voluptate necessitatibus?",
			author: {
				id: "b1f37fea-32a5-11ee-be56-0242ac120002",
				name: "Tereza Konecna",
			},
			name: "Card Name",
			status: "Status",
			commentCount: 10,
			datePosted: new Date("1995-12-17T03:24:00"),
			likes: 58,
		},
	];
	return (
		<div className="scrollbar1 center h-screen w-[840px] bg-board absolute left-0 flex flex-row">
			<SideNavbar user={currentUser}></SideNavbar>
			<Board user={currentUser} cardsData={mockCardsData}></Board>
		</div>
	);
}

export default App;
