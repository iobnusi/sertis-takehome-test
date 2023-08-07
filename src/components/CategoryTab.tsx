import { ReactNode, useState } from "react";
import { CardCategory } from "./card/card_util";
import Button from "./basic/Button";

interface CategoryTabProps {
	category: CardCategory;
	isSelected: boolean;
	users: number;
	icon: Element | JSX.Element;
	onSelect: (category: CardCategory) => void;
	onDeselect: () => void;
}

function CategoryTab(props: CategoryTabProps) {
	return (
		<li
			key={props.category}
			className="h-[70px] w-[225px] shrink-0  list-none"
		>
			<Button
				className={`w-full h-full flex flex-row ${
					props.isSelected ? "bg-side-nav-icon" : "bg-side-nav-body"
				}  border-b-[1px] border-side-nav-secondary hover:!bg-side-nav-icon`}
				onClick={() => {
					props.isSelected
						? props.onDeselect()
						: props.onSelect(props.category);
				}}
			>
				<div className="w-[70px] h-[70px] bg-side-nav-icon shrink-0 border-b-[1px] border-side-nav-secondary flex justify-center items-center">
					<div className="h-7 w-7">{props.icon as ReactNode}</div>
				</div>
				<div className="min-w-0 h-full px-4 py-3 flex flex-col gap-2">
					<p className="text-side-nav-primary text-xs font-semibold truncate ">
						{props.category}
					</p>
					<p className="text-side-nav-secondary text-xs text-start font-semibold">
						{`${props.users} User${props.users === 1 ? "" : "s"}`}
					</p>
				</div>
			</Button>
		</li>
	);
}

export default CategoryTab;
