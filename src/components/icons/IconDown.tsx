import { IconProps } from '@/src/commons/interfaces';
import React from 'react';

const defaultProps: IconProps = {
	width: 20,
	height: 16,
	viewBox: '0 0 20 16',
	fill: '#FFDA44',
	stroke: '#D80027',
};

const IconDown = (props: IconProps) => {
	const { width, height, viewBox, fill, stroke } = { ...defaultProps, ...props };

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={2}
			stroke="currentColor"
			className="h-4 w-4"
		>
			<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
		</svg>
	);
};

export default IconDown;
