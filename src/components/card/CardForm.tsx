import React, { useEffect, useReducer } from "react";
import TextArea from "../basic/TextArea";
import Line from "../basic/Line";
import Button from "../basic/Button";
import { CardCategory } from "./card_util";
import CategoryDropdown from "../CategoryDropdown";
import formReducer, { FormActionType, FormState } from "./form_reducer";

interface CardFormProps {
	className?: string;
	handleSubmit: (formState: FormState) => void;
}
function CardForm(props: CardFormProps) {
	// on click post should call an event and pass event to board where the mock data array will be appended with the newly created card from the form

	const initFormState: FormState = {
		author: "author",
		category: CardCategory.biology,
		content: "",
		name: "name",
		status: "status",
	};

	const [formState, dispatch] = useReducer(formReducer, initFormState);

	useEffect(() => {
		console.log(formState);
	}, [formState]);

	return (
		<div className="w-full h-fit bg-white p-5 flex flex-row gap-2">
			<div className="w-10 h-10 rounded-full bg-card-body shrink-0"></div>
			<div className="w-full flex flex-col gap-4 items-start">
				<CategoryDropdown
					onSelectCategory={(category: CardCategory) => {
						dispatch({
							type: FormActionType.category_update,
							payload: category,
						});
					}}
				></CategoryDropdown>
				<TextArea
					className="w-full outline-none"
					rows={1}
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
						className="w-20 h-8 rounded-full bg-card-title"
						onClick={() => props.handleSubmit(formState)}
					>
						<p className="text-white font-bold text-sm">Post</p>
					</Button>
				</div>
			</div>
		</div>
	);
}

export default CardForm;
