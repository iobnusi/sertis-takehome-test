import React from "react";
import Button from "./basic/Button";
import ChevronDownSvg from "./svgs/ChevronDownSvg";

interface CategoryDropdownProps {
	className?: string;
}
function CategoryDropdown(props: CategoryDropdownProps) {
	return (
		<Button className="bg-card-title px-3 rounded-full flex flex-rwo gap-1 items-center">
			<small className="text-white font-bold">Select Category</small>
			<ChevronDownSvg className="h-4 w-4 text-white"></ChevronDownSvg>
		</Button>
	);
}

export default CategoryDropdown;
