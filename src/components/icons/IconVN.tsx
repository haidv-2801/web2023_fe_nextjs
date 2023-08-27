import { IconProps } from '@/src/commons/interfaces';
import React from 'react';

const defaultProps: IconProps = {
	width: 20,
	height: 16,
	viewBox: '0 0 20 16',
	fill: '#FFDA44',
	stroke: '#D80027',
};

const IconVN = (props: IconProps) => {
	const { width, height, viewBox, fill, stroke } = { ...defaultProps, ...props };

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox={viewBox}
			fill="none"
		>
			<g>
				<path d="M197.025 0.956299H0V342.949H513V0.956299H197.025Z" fill={stroke} />
				<path
					d="M10 4.11792L10.8853 7.18297H13.75L11.4323 9.07727L12.3177 12.1424L10 10.2481L7.68234 12.1424L8.56766 9.07727L6.25 7.18297H9.11473L10 4.11792Z"
					fill={fill}
				/>
			</g>
			<defs>
				<clipPath>
					<rect width={width} height={height} fill="white" transform="translate(0 0.956299)" />
				</clipPath>
			</defs>
		</svg>
	);
};

export default IconVN;
