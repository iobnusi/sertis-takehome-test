import React from "react";

function SideNavbar() {
	return (
		<div className="h-screen w-[230px] shrink-0 bg-side-nav-body">
			<div className="h-[90px] bg-side-nav-header flex justify-center items-center   ">
				<p className="text-white text-2xl">
					You<small className="font-semibold text-2xl">know</small>
				</p>
			</div>
		</div>
	);
}

export default SideNavbar;
