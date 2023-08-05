import { User } from "../utils/user_util";

export enum CardCategory {
	physics = "Physics",
	biology = "Biology",
	finance = "Finance",
	chemistry = "Chemistry",
	engineering = "Engineering",
	health = "Health",
	society = "Society and Social Studies",
	space = "Space",
	art = "Art",
}

export interface CardProps {
	data: CardData;
	isEditable: boolean;
}

export interface CardData {
	name?: string;
	content: string;
	category?: CardCategory;
	status: string;
	author: User;
	likes?: number;
	commentCount?: number;
	datePosted: Date;
}

export function getTimeElapsedFromDatePosted(date: Date): string {
	let res;
	let now = new Date().getTime();
	let elapsedTimeInMins = Math.round((now - date.getTime()) / 1000 / 60);

	if (elapsedTimeInMins === 0) res = `just now`;
	else if (elapsedTimeInMins < 60)
		res = `${elapsedTimeInMins} minute${
			elapsedTimeInMins === 1 ? "" : "s"
		} ago`;
	else if (elapsedTimeInMins >= 60 && elapsedTimeInMins < 60 * 24)
		res = `${Math.round(elapsedTimeInMins / 60)} hour${
			Math.round(elapsedTimeInMins / 60) === 1 ? "" : "s"
		} ago`;
	else if (elapsedTimeInMins >= 60 * 24 && elapsedTimeInMins < 60 * 24 * 365)
		res = `${Math.round(elapsedTimeInMins / 60 / 24)} day${
			Math.round(elapsedTimeInMins / 60 / 24) === 1 ? "" : "s"
		} ago`;
	else
		res = `${Math.round(elapsedTimeInMins / 60 / 24 / 365)} year${
			Math.round(elapsedTimeInMins / 60 / 24 / 365) === 1 ? "" : "s"
		} ago`;
	return res;
}
