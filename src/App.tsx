import React from "react";
import SideNavbar from "./components/SideNavbar";
import Board from "./components/Board";
import "./App.css";

function App() {
	return (
		<div className="center h-screen w-[840px] bg-board absolute left- flex flex-row">
			<SideNavbar></SideNavbar>
			<Board></Board>
		</div>
	);
}

export default App;
