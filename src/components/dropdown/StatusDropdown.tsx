import { useEffect, useRef, useState } from "react";
import Button from "../basic/Button";
import { CardStatus } from "../card/card_util";
import StatusIcon from "../basic/StatusIcon";

interface StatusDropdownProps {
	className?: string;
	status: CardStatus;
	onSelectStatus: (status: CardStatus) => void;
}

function StatusDropdown(props: StatusDropdownProps) {
	const [open, setOpen] = useState(true);

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
				className="tablet:px-3 rounded-full flex flex-row gap-2 items-center  "
				onClick={() => {
					setOpen(!open);
				}}
			>
				<StatusIcon
					status={props.status}
					className={`h-4 w-4 fill-card-title`}
				></StatusIcon>
				<small className="mobile:hidden tablet:flex text-card-title font-bold">
					{props.status ? props.status : "Add Status"}
				</small>
			</Button>
			{open ? (
				<div className="absolute bg-white rounded-lg top-8 mobile:left-[-100px] tablet:left-[-50px] mobile:w-28 tablet:w-40 h-fit max-h-60 shadow-xl flex flex-col overflow-auto">
					{(
						Object.keys(CardStatus) as (keyof typeof CardStatus)[]
					).map((key, index) => {
						return (
							<li key={key} className="list-none">
								<Button
									className="h-12 shrink-0 px-4 py-1 w-full "
									onClick={() => {
										setOpen(false);
										props.onSelectStatus(CardStatus[key]);
									}}
								>
									<p className="font-semibold text-start text-sm">
										{CardStatus[key]}
									</p>
								</Button>
							</li>
						);
					})}
				</div>
			) : null}
		</div>
	);
}

export default StatusDropdown;
