import React from "react";
import HeartSvg from "../svgs/HeartSvg";
import Button from "../basic/Button";
import CircleSvg from "../svgs/CircleSvg";
import { CardCategory, CardProps } from "./card_util";

function Card(props: CardProps) {
	return (
		<div className="bg-white p-5 flex flex-col gap-8 w-full h-fit">
			<div className="flex flex-col gap-4">
				<div className="flex flex-row justify-between">
					<p className="font-bold text-xs text-card-title">
						{props.category.toUpperCase()}
					</p>
					<Button className="">
						<CircleSvg className="h-4 w-4 fill-card-title"></CircleSvg>
					</Button>
				</div>

				<p className="text-lg text-card-body">{props.textContent}</p>
				<div className="flex flex-row h-4 gap-2">
					{/* Likes */}
					<div className="flex flex-row gap-2 items-center justify-center">
						<HeartSvg className="h-4 w-4 fill-card-body" />
						<small className="text-card-body font-bold">78</small>
					</div>
					<div className=" w-[1px] bg-card-body border-1 shrink-0"></div>
					{/* Comments */}
					<div className="flex flex-row gap-1 items-center">
						<small className="text-card-body font-bold">5</small>
						<small className="text-card-body">Comments</small>
					</div>
				</div>
			</div>
			<div className="h-10 flex flex-row items-center p-2 gap-2">
				{/* Author Info */}
				<div className="w-7 h-7 rounded-full bg-card-body shrink-0"></div>
				<div className="flex flex-col">
					<small className="text-card-title text-xs font-bold">
						Tereza Konecna
					</small>
					<small className="text-card-body text-[10px]">
						2 hours ago
					</small>
				</div>
			</div>
		</div>
	);
}

export default Card;
