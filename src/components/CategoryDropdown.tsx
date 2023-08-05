import React, { useEffect, useRef, useState } from "react";
import Button from "./basic/Button";
import ChevronDownSvg from "./svgs/ChevronDownSvg";
import { CardCategory } from "./card/card_util";

interface CategoryDropdownProps {
	className?: string;
	category: CardCategory | undefined;
	onSelectCategory: (category: CardCategory) => void;
}

function CategoryDropdown(props: CategoryDropdownProps) {
	const [open, setOpen] = useState(false);

	const dropdown = useRef<HTMLDivElement>(null);

	useEffect(function setupListener() {
		const closeDropdown = (e: MouseEvent) => {
			if (
				dropdown.current &&
				open &&
				!dropdown.current.contains(e.target as Node)
			) {
				setOpen(false);
			}
		};
		document.addEventListener("mousedown", closeDropdown);

		return function cleanupListener() {
			document.removeEventListener("mousedown", closeDropdown);
		};
	});

	return (
		<div className="w-full relative" ref={dropdown}>
			<Button
				className="bg-card-title px-3 rounded-full flex flex-row gap-1 items-center"
				onClick={() => {
					setOpen(!open);
				}}
			>
				<small className="text-white font-bold">
					{props.category ? props.category : "Select Category"}
				</small>
				<ChevronDownSvg className="h-4 w-4 text-white"></ChevronDownSvg>
			</Button>
			{open ? (
				<div className="absolute bg-white rounded-lg top-8 w-40 h-fit max-h-60 shadow-xl flex flex-col overflow-auto">
					{(
						Object.keys(
							CardCategory
						) as (keyof typeof CardCategory)[]
					).map((key, index) => {
						return (
							<Button
								className="h-12 shrink-0 px-4 py-1 hover:bg-card-body"
								onClick={() => {
									setOpen(false);
									props.onSelectCategory(CardCategory[key]);
								}}
							>
								<p className="font-semibold text-start text-sm">
									{CardCategory[key]}
								</p>
							</Button>
						);
					})}
				</div>
			) : null}
		</div>
	);
}

export default CategoryDropdown;
