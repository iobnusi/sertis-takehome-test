import React, { ReactNode } from "react";
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("modal-root");

interface ModalProps {
	children: ReactNode;
}
function Modal(props: ModalProps) {
	return modalRoot ? (
		ReactDOM.createPortal(
			<div className="w-1/2 h-1/2 top-0 bg-gray block fixed ">
				{props.children}
			</div>,
			modalRoot
		)
	) : (
		<></>
	);
}

export default Modal;
