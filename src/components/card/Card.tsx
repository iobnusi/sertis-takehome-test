import React, { useState } from "react";
import HeartSvg from "../svgs/HeartSvg";
import Button from "../basic/Button";
import CircleSvg from "../svgs/CircleSvg";
import { CardProps, getTimeElapsedFromDatePosted } from "./card_util";
import EditSvg from "../svgs/EditSvg";
import StatusIcon from "../basic/StatusIcon";

function Card(props: CardProps) {
	const [isLiked, setIsLiked] = useState(false);

	return (
		<div className="bg-white p-5 flex flex-col gap-8 w-full h-fit">
			<div className="flex flex-col gap-4">
				<div className="flex flex-row justify-between">
					<p className="font-bold text-xs text-card-title">
						{props.data.category
							? props.data.category.toUpperCase()
							: null}
					</p>
					<div className="flex flex-row gap-2">
						{props.isEditable ? (
							<Button className="">
								<EditSvg className="h-4 w-4 fill-card-title"></EditSvg>
							</Button>
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
				<div className="w-7 h-7 rounded-full bg-card-body shrink-0"></div>
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
