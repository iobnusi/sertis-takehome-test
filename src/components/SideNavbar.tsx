import { CardCategory } from "./card/card_util";
import CategoryTab from "./CategoryTab";
import GraphSvg from "./svgs/GraphSvg";
import { User } from "./utils/user_util";
import DnaSvg from "./svgs/DnaSvg";
import PhysicsSvg from "./svgs/PhysicsSvg";
import ChemistrySvg from "./svgs/ChemistrySvg";
import EngineeringSvg from "./svgs/EngineeringSvg";
import HealthSvg from "./svgs/HealthSvg";
import SocialStudiesSvg from "./svgs/SocialStudiesSvg";
import SpaceSvg from "./svgs/SpaceSvg";
import ArtSvg from "./svgs/ArtSvg";
import { useState } from "react";

interface SideNavbarProps {
	user: User;
	onSelectFilterCategory: (category: CardCategory) => void;
	onDeselectFilterCategory: (category: CardCategory) => void;
}
function SideNavbar(props: SideNavbarProps) {
	const [selectedCategory, setSelectedCategory] =
		useState<CardCategory | null>(null);
	function getSvgFromCategory(category: CardCategory): JSX.Element {
		const styleStroke = "stroke-side-nav-primary";
		const styleFill = " fill-side-nav-primary";
		switch (category) {
			case CardCategory.finance:
				return <GraphSvg className={styleFill}></GraphSvg>;
			case CardCategory.biology:
				return <DnaSvg className={styleStroke}></DnaSvg>;
			case CardCategory.physics:
				return <PhysicsSvg className={styleStroke}></PhysicsSvg>;
			case CardCategory.chemistry:
				return <ChemistrySvg className={styleFill}></ChemistrySvg>;
			case CardCategory.engineering:
				return <EngineeringSvg className={styleFill}></EngineeringSvg>;
			case CardCategory.health:
				return <HealthSvg className={styleFill}></HealthSvg>;
			case CardCategory.society:
				return (
					<SocialStudiesSvg className={styleFill}></SocialStudiesSvg>
				);
			case CardCategory.space:
				return <SpaceSvg className={styleFill}></SpaceSvg>;
			case CardCategory.art:
				return <ArtSvg className={styleFill}></ArtSvg>;
			default:
				return <></>;
		}
	}
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
							isSelected={selectedCategory === CardCategory[key]}
							category={CardCategory[key]}
							users={10}
							icon={getSvgFromCategory(CardCategory[key])}
							onSelect={(category: CardCategory) => {
								setSelectedCategory(category);
								props.onSelectFilterCategory(CardCategory[key]);
							}}
							onDeselect={(category: CardCategory) => {
								setSelectedCategory(null);
								props.onDeselectFilterCategory(
									CardCategory[key]
								);
							}}
						></CategoryTab>
					);
				})}
			</div>
			<div className="h-[60px] p-3 bg-side-nav-header flex flex-row gap-4 items-center">
				<div className="w-10 h-10 rounded-full bg-card-body shrink-0"></div>
				<p className="text-side-nav-primary font-bold text-sm">
					{props.user.name}
				</p>
			</div>
		</div>
	);
}

export default SideNavbar;
