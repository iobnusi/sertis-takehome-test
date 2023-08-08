import { CardCategory, CardStatus } from "./card_util";

export enum FormActionType {
	name_update,
	status_update,
	content_update,
	category_update,
	imgSrc_update,
	reset,
}

interface FormAction {
	type: FormActionType;
	payload: any;
}

export interface FormState {
	id: string;
	name: string;
	status: CardStatus | undefined;
	content: string;
	category: CardCategory | undefined;
	imgSrc: string | undefined;
}

export const emptyFormState: FormState = {
	id: "",
	category: undefined,
	content: "",
	name: "name",
	status: undefined,
	imgSrc: undefined,
};

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
		case FormActionType.imgSrc_update:
			return {
				...state,
				imgSrc: action.payload,
			};
		case FormActionType.reset:
			return emptyFormState;
		default:
			return state;
	}
};

export default formReducer;
