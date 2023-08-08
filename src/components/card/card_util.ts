import { User } from "../utils/user_util";
import { FormState } from "./form_reducer";

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

export enum CardStatus {
	hot_take = "Hot Take",
	true_fact = "True Fact",
	interesting = "Interesting",
	question = "Question",
}

export interface CardProps {
	data: CardData;
	isEditable: boolean;
	runAnimOnLoad: boolean;
	editCallback: (cardFormState: FormState) => void;
	deleteCallback: (cardId: string) => void;
}

export interface CardData {
	id: string;
	name?: string;
	content: string;
	category?: CardCategory;
	status?: CardStatus;
	author: User;
	likes?: number;
	commentCount?: number;
	datePosted: Date;
	justCreated?: boolean;
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

export function parseCardDataToFormState(data: CardData): FormState {
	let formState: FormState = {
		id: data.id,
		category: data.category,
		content: data.content,
		name: data.name ?? "",
		status: data.status,
	};
	return formState;
}
