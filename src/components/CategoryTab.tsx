import React, { ReactNode } from "react";
import { CardCategory } from "./card/card_util";

interface CategoryTabProps {
	category: CardCategory;
	users: number;
	icon: ReactNode;
}

function CategoryTab(props: CategoryTabProps) {
	return (
		<div className="h-[70px] w-[225px] shrink-0 flex flex-row border-b-[1px] border-side-nav-secondary">
			<div className="w-[70px] bg-side-nav-icon shrink-0  flex justify-center items-center">
				<div className="h-6 w-6">{props.icon}</div>
			</div>
			<div className="bg-side-nav-body min-w-0 h-full px-4 py-3 flex flex-col gap-2">
				<p className="text-side-nav-primary text-xs font-semibold truncate ">
					{props.category}
				</p>
				<p className="text-side-nav-secondary text-xs font-semibold">
					{props.users} Users
				</p>
			</div>
		</div>
	);
}

export default CategoryTab;
