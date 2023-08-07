interface ProfileIconProps {
	name: string;
	className?: string;
}
function ProfileIcon(props: ProfileIconProps) {
	const bgStyle = props.name.charCodeAt(0) % 4;
	return (
		<div
			className={`w-10 h-10 rounded-full  shrink-0 flex items-center justify-center text-lg font-semibold text-white ${
				bgStyle === 0
					? "bg-profile-0"
					: bgStyle === 1
					? "bg-profile-1"
					: bgStyle === 2
					? "bg-profile-2"
					: "bg-profile-3"
			} `}
		>
			{props.name.charAt(0)}
		</div>
	);
}

export default ProfileIcon;
