import React from "react";
import Button from "./basic/Button";
import ChevronDownSvg from "./svgs/ChevronDownSvg";
import PlusSvg from "./svgs/PlusSvg";

interface StatusDropdownProps {
	className?: string;
}
function StatusDropdown(props: StatusDropdownProps) {
	return (
		<Button className="bg-card-title w-fit px-3 rounded-full flex flex-row gap-1 items-center">
			<small className="text-white text-[10px] font-bold pt-[1px]">
				Add Status
			</small>
			<PlusSvg className="h-4 w-4 text-white"></PlusSvg>
		</Button>
	);
}

export default StatusDropdown;
