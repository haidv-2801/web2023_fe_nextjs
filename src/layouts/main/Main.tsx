import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
	children?: ReactNode;
	className?: string;
};

const Main = ({ children, className }: Props) => {
	return (
		<main
			className={twMerge(
				'mx-auto my-6  w-full max-w-7xl flex-1 bg-white px-4 sm:px-6 lg:px-8 ',
				className
			)}
		>
			{children}
		</main>
	);
};

export default Main;
