import Card from "./card/Card";
import { CardData } from "./card/card_util";
import { User } from "./utils/user_util";
import { FormState } from "./card/form_reducer";

interface CardColumnsProps {
	cardsData: CardData[];
	currentUser: User;
	editCallback: (cardFormState: FormState) => void;
}

function CardColumns(props: CardColumnsProps) {
	return (
		<div className="h-full w-full flex flex-row gap-4 ">
			<div className="w-[calc(50%-8px)] h-fit  flex flex-col gap-4 shrink-0">
				{props.cardsData.map((cardData, i) => {
					if (i % 2 === 0)
						return (
							<Card
								data={cardData}
								isEditable={
									props.currentUser.id === cardData.author.id
								}
								editCallback={props.editCallback}
							></Card>
						);
					else return <></>;
				})}
			</div>
			<div className="w-[calc(50%-8px)] h-fit flex flex-col gap-4 shrink-0">
				{props.cardsData.map((cardData, i) => {
					if (i % 2 === 1)
						return (
							<Card
								data={cardData}
								isEditable={
									props.currentUser.id === cardData.author.id
								}
								editCallback={props.editCallback}
							></Card>
						);
					else return <></>;
				})}
			</div>
		</div>
	);
}

export default CardColumns;
