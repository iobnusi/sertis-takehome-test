import React, { useEffect, useReducer } from "react";
import TextArea from "../basic/TextArea";
import Line from "../basic/Line";
import Button from "../basic/Button";
import { CardCategory, CardStatus } from "./card_util";
import CategoryDropdown from "../dropdown/CategoryDropdown";
import formReducer, {
	FormActionType,
	FormState,
	emptyFormState,
} from "./form_reducer";
import StatusDropdown from "../dropdown/StatusDropdown";

interface CardFormProps {
	className?: string;
	textAreaRows: number;
	initFormState?: FormState;
	submitButtonCondition: (formState: FormState) => boolean;
	handleSubmit: (formState: FormState) => void;
}
function CardForm(props: CardFormProps) {
	// on click post should call an event and pass event to board where the mock data array will be appended with the newly created card from the form

	const [formState, dispatch] = useReducer(
		formReducer,
		props.initFormState ?? emptyFormState
	);
	return (
		<div
			className={` ${props.className} w-full h-fit bg-white flex flex-row gap-2`}
		>
			<div className="w-10 h-10 rounded-full bg-card-body shrink-0"></div>
			<div className="w-full flex flex-col gap-4 items-start">
				<div className="w-full flex flex-row justify-between">
					<CategoryDropdown
						category={formState.category}
						onSelectCategory={(category: CardCategory) => {
							dispatch({
								type: FormActionType.category_update,
								payload: category,
							});
						}}
					></CategoryDropdown>
					<StatusDropdown
						status={formState.status}
						onSelectStatus={(status: CardStatus) =>
							dispatch({
								type: FormActionType.status_update,
								payload: status,
							})
						}
					></StatusDropdown>
				</div>

				<TextArea
					className="w-full outline-none"
					rows={props.textAreaRows}
					placeholder="What's on your mind?"
					value={formState.content}
					onChange={(
						event: React.ChangeEvent<HTMLTextAreaElement>
					) => {
						dispatch({
							type: FormActionType.content_update,
							payload: event.target.value,
						});
					}}
				></TextArea>
				<Line></Line>
				<div className="w-full flex justify-end">
					<Button
						className="w-20 h-8 rounded-full bg-card-title disabled:bg-card-body"
						disabled={props.submitButtonCondition(formState)}
						onClick={() => {
							props.handleSubmit(formState);
							dispatch({
								type: FormActionType.reset,
								payload: null,
							});
						}}
					>
						<p className="text-white font-bold text-sm">Post</p>
					</Button>
				</div>
			</div>
		</div>
	);
}

export default CardForm;
