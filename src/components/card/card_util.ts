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
	name?: string;
	content: string;
	category: CardCategory;
	status: string;
	author: string;
	likes?: number;
	commentCount?: number;
	datePosted: Date;
}
