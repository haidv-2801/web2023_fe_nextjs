import { IconProps } from '@/src/commons/interfaces';
import React from 'react';

const defaultProps: IconProps = {
	width: 20,
	height: 16,
	viewBox: '0 0 20 16',
	fill: '#FFDA44',
	stroke: '#D80027',
};

const IconUp = (props: IconProps) => {
	const { width, height, viewBox, fill, stroke } = { ...defaultProps, ...props };

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			className="h-4 w-4"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
		</svg>
	);
};

export default IconUp;
