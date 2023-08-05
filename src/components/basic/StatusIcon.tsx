import React, { ReactNode } from "react";
import CircleSvg from "../svgs/CircleSvg";
import { CardStatus } from "../card/card_util";

interface StatusIconProps {
	className?: string;
	status: CardStatus | undefined;
}
function StatusIcon(props: StatusIconProps) {
	return (
		<CircleSvg
			className={`${props.className} ${
				props.status === CardStatus.hot_take
					? "fill-status-hot-take"
					: props.status === CardStatus.interesting
					? "fill-status-interesting"
					: props.status === CardStatus.question
					? "fill-status-question"
					: props.status === CardStatus.true_fact
					? "fill-status-true-fact"
					: "fill-card-title"
			}`}
		></CircleSvg>
	);
}

export default StatusIcon;
