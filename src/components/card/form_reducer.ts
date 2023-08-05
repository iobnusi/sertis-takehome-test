import { User } from "../utils/user_util";
import { CardCategory } from "./card_util";

export enum FormActionType {
	name_update,
	status_update,
	content_update,
	category_update,
	reset,
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
}

export const initFormState: FormState = {
	category: undefined,
	content: "",
	name: "name",
	status: "status",
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
		case FormActionType.reset:
			return initFormState;
		default:
			return state;
	}
};

export default formReducer;
