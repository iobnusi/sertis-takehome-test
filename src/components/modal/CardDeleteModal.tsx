import Modal from "./Modal";
import Button from "../basic/Button";

interface CardDeleteModalProps {
	className?: string;
	isOpen: boolean;
	cardId: string;
	handleDelete: (cardId: string) => void;
	handleClose: () => void;
}
function CardDeleteModal(props: CardDeleteModalProps) {
	return (
		<Modal
			className="flex flex-col p-5 gap-6 rounded"
			isOpen={props.isOpen}
			handleClose={props.handleClose}
		>
			<div className="h-10 flex flex-col gap-4 items-center justify-between ">
				<p className="w-full text-center text-xl font-bold text-card-title  ">
					Are you sure you want to delete this post?
				</p>
				<small className="font-semibold text-card-body">
					Once you delete, this change cannot be undone.
				</small>
				<div className="flex flex-row gap-5">
					<Button
						className="h-8 px-2 rounded flex justify-center items-center"
						onClick={props.handleClose}
					>
						<small className="text-card-title font-semibold">
							Cancel
						</small>
					</Button>
					<Button
						className="h-8 px-2 rounded flex justify-center items-center hover:bg-[#FFC8C9]"
						onClick={() => props.handleDelete(props.cardId)}
					>
						<small className="text-delete font-semibold">
							Delete
						</small>
					</Button>
				</div>
			</div>
		</Modal>
	);
}

export default CardDeleteModal;
