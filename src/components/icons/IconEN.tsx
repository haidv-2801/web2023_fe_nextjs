import { IconProps } from '@/src/commons/interfaces';
import React from 'react';

const defaultProps: IconProps = {
	width: 20,
	height: 16,
	viewBox: '0 0 20 16',
	fill: '#FFDA44',
	stroke: '#D80027',
};

const IconEN = (props: IconProps) => {
	const { width, height, viewBox, fill, stroke } = { ...defaultProps, ...props };

	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="23" height="16" viewBox="0 0 23 16" fill="none">
			<g>
				<path d="M0 0.926514H22.5V15.9267H0V0.926514Z" fill="white" />
				<path
					d="M12.6563 0.926514H9.84376V7.02024H0V9.83274H9.84376V15.9265H12.6563V9.83274H22.5V7.02024H12.6563V0.926514Z"
					fill="#D80027"
				/>
				<path
					d="M17.3049 11.0352L22.4999 13.9213V11.0352H17.3049ZM13.6956 11.0352L22.4999 15.9265V14.5433L16.1853 11.0352H13.6956ZM20.1547 15.9265L13.6956 12.3377V15.9265H20.1547Z"
					fill="#0052B4"
				/>
				<path d="M13.6956 11.0352L22.4999 15.9264V14.5433L16.1853 11.0352H13.6956Z" fill="white" />
				<path
					d="M13.6956 11.0352L22.4999 15.9264V14.5433L16.1853 11.0352H13.6956Z"
					fill="#D80027"
				/>
				<path
					d="M3.97007 11.0349L0 13.2405V11.0349H3.97007ZM8.80436 11.6569V15.9263H1.12021L8.80436 11.6569Z"
					fill="#0052B4"
				/>
				<path d="M6.31464 11.0352L0 14.5433V15.9264L8.80436 11.0352H6.31464Z" fill="#D80027" />
				<path
					d="M5.195 5.81781L0 2.93165V5.81781H5.195ZM8.80436 5.81781L0 0.926514V2.30965L6.31464 5.81781H8.80436ZM2.34519 0.926514L8.80436 4.51527V0.926514H2.34519Z"
					fill="#0052B4"
				/>
				<path d="M8.80436 5.81781L0 0.926514V2.30965L6.31464 5.81781H8.80436Z" fill="white" />
				<path d="M8.80436 5.81781L0 0.926514V2.30965L6.31464 5.81781H8.80436Z" fill="#D80027" />
				<path
					d="M18.5299 5.81785L22.4999 3.61223V5.81785H18.5299ZM13.6956 5.19585V0.926514H21.3797L13.6956 5.19585Z"
					fill="#0052B4"
				/>
				<path
					d="M16.1853 5.81756L22.4999 2.30941V0.92627L13.6956 5.81756H16.1853Z"
					fill="#D80027"
				/>
			</g>
			<defs>
				<clipPath>
					<rect width="22.5" height="15" fill="white" transform="translate(0 0.926514)" />
				</clipPath>
			</defs>
		</svg>
	);
};

export default IconEN;
