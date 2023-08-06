interface LineProps {
	className?: string;
}
function Line(props: LineProps) {
	return (
		<div className={`h-[1px] w-full bg-card-body ${props.className}`}></div>
	);
}

export default Line;
