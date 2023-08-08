import { ReactNode, useEffect } from "react";
import ReactDOM from "react-dom";
import "../../App.css";

const modalRoot = document.getElementById("modal-root");

interface ModalProps {
	className?: string;
	children: ReactNode;
	isOpen: boolean;
	handleClose: () => void;
}

function Modal(props: ModalProps) {
	const handleCloseOnEsc = (e: KeyboardEvent) => {
		if (e.key === "Escape") props.handleClose();
	};
	useEffect(function setupListener() {
		document.addEventListener("keydown", handleCloseOnEsc);

		return function cleanupListener() {
			document.removeEventListener("keydown", handleCloseOnEsc);
		};
	});

	return modalRoot && props.isOpen ? (
		ReactDOM.createPortal(
			<div className="h-screen w-[840px] absolute translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2">
				{props.isOpen && (
					<div
						className="absolute h-full w-full bg-card-body opacity-40"
						onClick={() => props.handleClose()}
					></div>
				)}
				<div
					className={`${props.className} top-1/2 left-1/2 min-h-[150px] w-[570px] bg-white translate-x-[-50%] translate-y-[-50%] fixed`}
				>
					{props.children}
				</div>
			</div>,
			modalRoot
		)
	) : (
		<></>
	);
}

export default Modal;
