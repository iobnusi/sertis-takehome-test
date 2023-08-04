import { CardCategory } from "./card_util";

export enum FormActionType {
	name_update,
	status_update,
	content_update,
	category_update,
	author_update,
}

interface FormAction {
	type: FormActionType;
	payload: any;
}

export interface FormState {
	name: string;
	status: string;
	content: string;
	category: CardCategory | undefined;
	author: string;
}

const formReducer = (state: FormState, action: FormAction) => {
	switch (action.type) {
		case FormActionType.name_update:
			return {
				...state,
				name: action.payload,
			};
		case FormActionType.status_update:
			return {
				...state,
				status: action.payload,
			};
		case FormActionType.content_update:
			return {
				...state,
				content: action.payload,
			};
		case FormActionType.category_update:
			return {
				...state,
				category: action.payload,
			};
		case FormActionType.author_update:
			return {
				...state,
				author: action.payload,
			};
		default:
			return state;
	}
};

export default formReducer;
