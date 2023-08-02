import React from "react";
import Button from "./Button";
import Card from "./Card";
import CardColumns from "./CardColumns";

function Board() {
	const navButtons = ["Activity", "Users", "Groups"];
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
			<div className="grow p-4 overflow-auto">
				<CardColumns
					cards={[
						<Card
							title="PHYSICS"
							textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquat at quam nec"
						></Card>,
						<Card
							title="PHYSICS"
							textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquat at quam nec"
						></Card>,
						<Card
							title="PHYSICS"
							textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquat at quam nec"
						></Card>,
					]}
				></CardColumns>
			</div>
		</div>
	);
}

export default Board;
