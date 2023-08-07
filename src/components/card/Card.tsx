import React, { useState } from "react";
import HeartSvg from "../svgs/HeartSvg";
import Button from "../basic/Button";
import {
	CardProps,
	getTimeElapsedFromDatePosted,
	parseCardDataToFormState,
} from "./card_util";
import StatusIcon from "../basic/StatusIcon";
import EditOptionsDropdown from "../dropdown/EditOptionsDropdown";
import { EditAction } from "../dropdown/edit_options_util";
import ProfileIcon from "../basic/ProfileIcon";

function Card(props: CardProps) {
	const [isLiked, setIsLiked] = useState(false);

	return (
		<div
			key={props.key}
			className="slide-bottom bg-white p-5 flex flex-col gap-8 w-full h-fit"
		>
			<div className="flex flex-col gap-2">
				<div className="h-6 flex flex-row justify-between items-center">
					<p className="font-bold text-xs text-card-title">
						{props.data.category
							? props.data.category.toUpperCase()
							: null}
					</p>
					<div className="flex flex-row gap-2 items-center">
						{props.isEditable ? (
							<EditOptionsDropdown
								onSelectAction={(action: EditAction) => {
									if (action === EditAction.edit)
										props.editCallback(
											parseCardDataToFormState(props.data)
										);
									else props.deleteCallback(props.data.id);
								}}
							></EditOptionsDropdown>
						) : null}
						<StatusIcon
							className="h-4 w-4"
							status={props.data.status}
						></StatusIcon>
					</div>
				</div>

				<p className="text-lg text-card-body">{props.data.content}</p>
				<div className="flex flex-row h-4 gap-2">
					{/* Likes */}
					<div className="flex flex-row gap-2 items-center justify-center">
						<Button onClick={() => setIsLiked(!isLiked)}>
							<HeartSvg
								className={`h-4 w-4 ${
									isLiked ? "fill-like-red" : "fill-card-body"
								}`}
							/>
						</Button>
						{props.data.likes ? (
							<small className="text-card-body font-bold">
								{props.data.likes + (isLiked ? 1 : 0)}
							</small>
						) : isLiked ? (
							<small className="text-card-body font-bold">
								1
							</small>
						) : null}
					</div>
					<div className=" w-[1px] bg-card-body border-1 shrink-0"></div>
					{/* Comments */}
					<div className="flex flex-row gap-1 items-center">
						<small className="text-card-body font-bold">
							{props.data.commentCount ?? 0}
						</small>
						<small className="text-card-body">Comments</small>
					</div>
				</div>
			</div>
			<div className="h-10 flex flex-row items-center p-2 gap-2">
				{/* Author Info */}
				<ProfileIcon name={props.data.author.name}></ProfileIcon>
				<div className="flex flex-col">
					<small className="text-card-title text-xs font-bold">
						{props.data.author.name}
					</small>
					<small className="text-card-body text-[10px]">
						{getTimeElapsedFromDatePosted(props.data.datePosted)}
					</small>
				</div>
			</div>
		</div>
	);
}

export default Card;
