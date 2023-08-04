import React from "react";
import { CardCategory } from "./card/card_util";
import CategoryTab from "./CategoryTab";
import GraphSvg from "./svgs/GraphSvg";

function SideNavbar() {
	return (
		<div className="h-screen w-[230px] shrink-0 bg-side-nav-body flex flex-col">
			<div className="h-[90px] bg-side-nav-header flex justify-center items-center shrink-0   ">
				<p className="text-white text-2xl">
					You<small className="font-semibold text-2xl">know</small>
				</p>
			</div>
			<div className="overflow-auto grow">
				{(
					Object.keys(CardCategory) as (keyof typeof CardCategory)[]
				).map((key, index) => {
					return (
						<CategoryTab
							category={CardCategory[key]}
							users={10}
							icon={
								<GraphSvg className=" stroke-side-nav-primary"></GraphSvg>
							}
						></CategoryTab>
					);
				})}
			</div>
			<div className="h-[60px] p-3 bg-side-nav-header flex flex-row gap-4 items-center">
				<div className="w-10 h-10 rounded-full bg-card-body shrink-0"></div>
				<p className="text-side-nav-primary font-bold text-sm">
					Eisen Lance De Guzman
				</p>
			</div>
		</div>
	);
}

export default SideNavbar;
