import { CardCategory, CardData, CardStatus } from "../card/card_util";

export const mockCardsData: CardData[] = [
	{
		id: "ee0d4da8-9564-4ed2-ab58-9379594f0637",
		category: CardCategory.biology,
		content:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, cumque ab veritatis quasi nihil temporibus corrupti veniam autem aperiam, adipisci et repudiandae. Natus deleniti tempora dolore, sit vero voluptate necessitatibus?",
		author: {
			id: "b1f37fea-32a5-11ee-be56-0242ac120002",
			name: "Tereza Konecna",
		},
		name: "Card Name",
		status: CardStatus.interesting,
		commentCount: 10,
		datePosted: new Date("1995-12-17T03:24:00"),
		likes: 58,
	},
	{
		id: "c8ed7ea4-eaf1-47c9-87a3-fe8bde42d7bd",
		category: CardCategory.physics,
		content:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, cumque ab veritatis quasi nihil temporibus corrupti veniam autem aperiam",
		author: {
			id: "b1f37fea-32a5-11ee-be56-0242ac120002",
			name: "Samuel Kornvius",
		},
		name: "Card Name",
		status: CardStatus.hot_take,
		commentCount: 8,
		datePosted: new Date("2023-02-15T08:50:00"),
		likes: 69,
	},
	{
		id: "c8ed7ea4-eaf1-47c9-87a3-fe8bde42u7bd",
		category: CardCategory.engineering,
		content:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, cumque ab veritatis quasi autem aperiam",
		author: {
			id: "b58a0f47-9437-46db-be4d-5451157adfa3",
			name: "Frederico Cocci",
		},
		name: "Card Name",
		status: CardStatus.true_fact,
		commentCount: 8,
		datePosted: new Date("2023-08-08T08:50:00"),
		likes: 69,
	},
	{
		id: "d78b587b-cff9-4a69-9ae4-d4aca004b4b3",
		category: CardCategory.engineering,
		content:
			"Lorem ipsum dolor sit. Consectetur, cumque ab veritatis quasi autem aperiam",
		author: {
			id: "b58a0f47-9437-46db-be4d-5451157adfa3",
			name: "Samira Reale",
		},
		name: "Card Name",
		status: CardStatus.true_fact,
		commentCount: 8,
		datePosted: new Date("2023-07-21T10:00:00"),
		likes: 69,
	},
];
