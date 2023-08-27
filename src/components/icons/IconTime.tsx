import { IconProps } from '@/src/commons/interfaces';
import React from 'react';
import { twMerge } from 'tailwind-merge';

const defaultProps: IconProps = {
	width: 20,
	height: 16,
	viewBox: '0 0 20 16',
	fill: '#FFDA44',
	stroke: '#D80027',
	className: '',
};

const IconTime = (props: IconProps) => {
	const { width, height, viewBox, fill, stroke, className } = { ...defaultProps, ...props };

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth="1"
			stroke="currentColor"
			className={twMerge('h-4 w-4', className)}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
			/>
		</svg>
	);
};

export default IconTime;
