import React, { InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const InputBase = ({ className, ...props }: InputProps) => {
	return (
		<div className="flex flex-col">
			<input
				className={twMerge(
					'bg-main-background text-base-content focus:ring-primary-focus w-full min-w-0 appearance-none rounded-md border border-main-border px-4 py-2 text-base placeholder-placeholder placeholder:text-[14px] focus:border-primary focus:outline-none',
					className
				)}
				{...props}
			/>
		</div>
	);
};

export default InputBase;
