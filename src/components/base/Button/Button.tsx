import React, { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ className, children, disabled, ...props }: ButtonProps) => {
	return (
		<button
			className={twMerge(
				'bt h-auto w-auto cursor-pointer rounded-[6px] px-[17px] py-[9px] text-sm',
				className,
				disabled && 'pointer-events-none bg-main-border'
			)}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
