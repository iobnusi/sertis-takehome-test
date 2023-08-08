import Card from "./card/Card";
import { CardCategory, CardData } from "./card/card_util";
import { User } from "./utils/user_util";
import { FormState } from "./card/form_reducer";
import "../App.css";
interface CardColumnsProps {
	cardsData: CardData[];
	latestCardId: string;
	currentUser: User;
	filterCategory: CardCategory | null;
	editCallback: (cardFormState: FormState) => void;
	deleteCallback: (cardId: string) => void;
}

function CardColumns(props: CardColumnsProps) {
	return (
		<>
			<div className="h-full w-full desktop:flex mobile:hidden flex-row gap-4">
				<div className="w-[calc(50%-8px)] h-fit flex flex-col gap-4 shrink-0">
					{props.cardsData
						.filter(
							(card) =>
								card.category === props.filterCategory ||
								props.filterCategory === null
						)
						.map((cardData, i) => {
							if (i % 2 === 0)
								return (
									<li key={cardData.id} className="list-none">
										<Card
											runAnimOnLoad={
												cardData.author.id ===
												props.currentUser.id
											}
											enableEnterAnim={
												cardData.id ===
												props.latestCardId
											}
											data={cardData}
											isEditable={
												props.currentUser.id ===
												cardData.author.id
											}
											editCallback={props.editCallback}
											deleteCallback={
												props.deleteCallback
											}
										></Card>
									</li>
								);
							else return <></>;
						})}
				</div>
				<div className="w-[calc(50%-8px)] h-fit flex flex-col gap-4 shrink-0">
					{props.cardsData
						.filter(
							(card) =>
								card.category === props.filterCategory ||
								props.filterCategory === null
						)
						.map((cardData, i) => {
							if (i % 2 === 1)
								return (
									<li key={cardData.id} className="list-none">
										<Card
											runAnimOnLoad={
												cardData.author.id ===
												props.currentUser.id
											}
											data={cardData}
											isEditable={
												props.currentUser.id ===
												cardData.author.id
											}
											editCallback={props.editCallback}
											deleteCallback={
												props.deleteCallback
											}
										></Card>
									</li>
								);
							else return <></>;
						})}
				</div>
			</div>
			<div className="desktop:hidden mobile:flex flex-col">
				<div className="w-full h-fit flex flex-col gap-4 shrink-0">
					{props.cardsData
						.filter(
							(card) =>
								card.category === props.filterCategory ||
								props.filterCategory === null
						)
						.map((cardData, i) => {
							return (
								<li key={cardData.id} className="list-none">
									<Card
										runAnimOnLoad={
											cardData.author.id ===
											props.currentUser.id
										}
										enableEnterAnim={
											cardData.id === props.latestCardId
										}
										data={cardData}
										isEditable={
											props.currentUser.id ===
											cardData.author.id
										}
										editCallback={props.editCallback}
										deleteCallback={props.deleteCallback}
									></Card>
								</li>
							);
						})}
				</div>
			</div>
		</>
	);
}

export default CardColumns;
