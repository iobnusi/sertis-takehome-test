import Modal from "./Modal";
import CardForm from "../card/CardForm";
import { FormState } from "../card/form_reducer";
import CloseSvg from "../svgs/CloseSvg";
import Button from "../basic/Button";
import { User } from "../utils/user_util";

interface CardEditModalProps {
	className?: string;
	isOpen: boolean;
	author: User;
	formState: FormState;
	handleUpdate: (formState: FormState) => void;
	handleClose: () => void;
}
function CardEditModal(props: CardEditModalProps) {
	return (
		<Modal
			className="flex flex-col px-5 pb-5 pt-3 gap-6 rounded"
			isOpen={props.isOpen}
			handleClose={props.handleClose}
		>
			<div className="h-10 flex flex-row items-center justify-between ">
				<p className=" text-xl font-bold text-card-title ">
					Edit your post
				</p>
				<Button
					className="h-10 w-10 flex justify-center items-center"
					onClick={props.handleClose}
				>
					<CloseSvg className="h-6 w-6 stroke-card-title"></CloseSvg>
				</Button>
			</div>

			<CardForm
				author={props.author}
				handleSubmit={props.handleUpdate}
				textAreaRows={1}
				initFormState={props.formState}
				submitButtonCondition={(formState) => {
					return (
						formState.category === props.formState.category &&
						formState.content === props.formState.content &&
						formState.status === props.formState.status &&
						formState.name === props.formState.name
					);
				}}
			></CardForm>
		</Modal>
	);
}

export default CardEditModal;
