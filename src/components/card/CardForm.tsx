import React, { useEffect, useState } from "react";
import TextArea from "../basic/TextArea";
import StatusDropdown from "../StatusDropdown";
import Line from "../basic/Line";
import Button from "../basic/Button";
import { CardCategory, CardProps } from "./card_util";
import CategoryDropdown from "../CategoryDropdown";

interface CardFormProps {
	className?: string;
	handleSubmit: (newCardProps: CardProps) => void;
}
function CardForm(props: CardFormProps) {
	// on click post should call an event and pass event to board where the mock data array will be appended with the newly created card from the form
	const [textContent, setTextContent] = useState("");

	// useEffect(() => {
	// 	console.log(textContent);
	// }, [textContent]);

	return (
		<div className="w-full h-fit bg-white p-5 flex flex-row gap-2">
			<div className="w-10 h-10 rounded-full bg-card-body shrink-0"></div>
			<div className="w-full flex flex-col gap-4 items-start">
				<div className="flex flex-col gap-2 ">
					<CategoryDropdown></CategoryDropdown>
					{/* <StatusDropdown></StatusDropdown> */}
				</div>

				<TextArea
					className="w-full outline-none"
					rows={1}
					placeholder="What's on your mind?"
					value={textContent}
					onChange={(
						event: React.ChangeEvent<HTMLTextAreaElement>
					) => {
						setTextContent(event?.target?.value);
					}}
				></TextArea>
				<Line></Line>
				<div className="w-full flex justify-end">
					<Button
						className="w-20 h-8 rounded-full bg-card-title"
						onClick={() =>
							props.handleSubmit({
								category: CardCategory.chemistry,
								textContent: textContent,
								author: "Author",
								name: "Name",
								status: "Status",
							})
						}
					>
						<p className="text-white font-bold text-sm">Post</p>
					</Button>
				</div>
			</div>
		</div>
	);
}

export default CardForm;
