import { SvgProps } from "./svg_util";

function PhysicsSvg(props: SvgProps) {
	return (
		<svg
			className={props.className}
			viewBox="0 0 24 24"
			id="Layer_1"
			data-name="Layer 1"
			xmlns="http://www.w3.org/2000/svg"
		>
			<ellipse
				fill="none"
				strokeMiterlimit="10"
				strokeWidth="1.91px"
				cx="12"
				cy="12"
				rx="13.51"
				ry="6.14"
				transform="translate(-4.97 12) rotate(-45)"
			/>
			<ellipse
				fill="none"
				strokeMiterlimit="10"
				strokeWidth="1.91px"
				cx="12"
				cy="12"
				rx="6.14"
				ry="13.51"
				transform="translate(-4.97 12) rotate(-45)"
			/>
			<circle
				fill="none"
				strokeMiterlimit="10"
				strokeWidth="1.91px"
				cx="12"
				cy="12"
				r="0.95"
			/>
		</svg>
	);
}

export default PhysicsSvg;
