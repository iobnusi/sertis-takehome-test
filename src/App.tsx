import React from "react";
import SideNavbar from "./components/SideNavbar";
import Board from "./components/Board";
import "./App.css";
import { CardCategory, CardProps } from "./components/card/card_util";

function App() {
	const cards: CardProps[] = [
		{
			category: CardCategory.biology,
			content:
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, cumque ab veritatis quasi nihil temporibus corrupti veniam autem aperiam, adipisci et repudiandae. Natus deleniti tempora dolore, sit vero voluptate necessitatibus?",
			author: "Author Name",
			name: "Card Name",
			status: "Status",
			commentCount: 10,
			datePosted: new Date("1995-12-17T03:24:00"),
			likes: 58,
		},
	];
	return (
		<div className="center h-screen w-[840px] bg-board absolute left- flex flex-row">
			<SideNavbar></SideNavbar>
			<Board cards={cards}></Board>
		</div>
	);
}

export default App;
