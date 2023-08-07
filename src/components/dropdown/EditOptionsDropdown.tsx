import { useEffect, useRef, useState } from "react";
import Button from "../basic/Button";
import EllipsisSvg from "../svgs/EllipsisSvg";
import { EditAction } from "./edit_options_util";

interface EditOptionsDropdownProps {
	className?: string;
	onSelectAction: (action: EditAction) => void;
}

function EditOptionsDropdown(props: EditOptionsDropdownProps) {
	const [open, setOpen] = useState(false);

	const dropdown = useRef<HTMLDivElement>(null);

	useEffect(function setupListener() {
		const closeDropdown = (e: MouseEvent) => {
			if (
				dropdown.current &&
				open &&
				!dropdown.current.contains(e.target as Node)
			) {
				setOpen(false);
			}
		};
		document.addEventListener("mousedown", closeDropdown);

		return function cleanupListener() {
			document.removeEventListener("mousedown", closeDropdown);
		};
	});

	return (
		<div className="w-fit relative" ref={dropdown}>
			<Button
				className="p-1 rounded-full flex flex-row gap-2 items-center"
				onClick={() => {
					setOpen(!open);
				}}
			>
				<EllipsisSvg
					className={`h-4 w-4 fill-card-title`}
				></EllipsisSvg>
			</Button>
			{open ? (
				<div className="absolute bg-white rounded-lg top-8 w-40 h-fit max-h-60 shadow-xl flex flex-col overflow-auto">
					<Button
						className="h-12 shrink-0 px-4 py-1"
						onClick={() => {
							setOpen(false);
							props.onSelectAction(EditAction.edit);
						}}
					>
						<p className="font-semibold text-start text-sm">Edit</p>
					</Button>
					<Button
						className="h-12 shrink-0 px-4 py-1"
						onClick={() => {
							setOpen(false);
							props.onSelectAction(EditAction.delete);
						}}
					>
						<p className="font-semibold text-start text-sm">
							Delete
						</p>
					</Button>
				</div>
			) : null}
		</div>
	);
}

export default EditOptionsDropdown;
