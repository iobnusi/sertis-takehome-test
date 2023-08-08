import { CardCategory, CardData } from "./card/card_util";
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
import ProfileIcon from "./basic/ProfileIcon";
import ChatSvg from "./svgs/ChatSvg";

interface SideNavbarProps {
	user: User;
	cardsData: CardData[];
	onSelectFilterCategory: (category: CardCategory) => void;
	onDeselectFilterCategory: () => void;
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

	function getNumOfUniqueUsersFromFilteredCards(
		cardsData: CardData[],
		filteredCategory: CardCategory
	): number {
		return Array.from(
			new Set(
				cardsData
					.filter((card) => card.category === filteredCategory)
					.map((cardData) => {
						return cardData.author.name;
					})
			)
		).length;
	}
	return (
		<div
			className="mobile:w-[75px] h-screen
		desktop:w-[230px] flex shrink-0 bg-side-nav-body flex-col"
		>
			<div className="h-[90px] bg-side-nav-header flex flex-row justify-between items-center shrink-0 p-5">
				<p className="mobile:hidden desktop:block text-white text-2xl">
					You<small className="font-semibold text-2xl">know</small>
				</p>
				<ChatSvg className="stroke-white h-8 w-8"></ChatSvg>
			</div>
			<div className="overflow-auto grow">
				{(
					Object.keys(CardCategory) as (keyof typeof CardCategory)[]
				).map((key, index) => {
					return (
						<li key={key} className="list-none">
							<CategoryTab
								isSelected={
									selectedCategory === CardCategory[key]
								}
								category={CardCategory[key]}
								users={getNumOfUniqueUsersFromFilteredCards(
									props.cardsData,
									CardCategory[key]
								)}
								icon={getSvgFromCategory(CardCategory[key])}
								onSelect={(category: CardCategory) => {
									setSelectedCategory(category);
									props.onSelectFilterCategory(
										CardCategory[key]
									);
								}}
								onDeselect={() => {
									setSelectedCategory(null);
									props.onDeselectFilterCategory();
								}}
							></CategoryTab>
						</li>
					);
				})}
			</div>
			<div className="h-[60px] p-3 bg-side-nav-header flex flex-row gap-4 items-center mobile:justify-center desktop:justify-start	">
				<ProfileIcon name={props.user.name}></ProfileIcon>
				<p className="mobile:hidden desktop:block text-side-nav-primary font-bold text-sm">
					{props.user.name}
				</p>
			</div>
		</div>
	);
}

export default SideNavbar;
