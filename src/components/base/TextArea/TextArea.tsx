import React, { TextareaHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextArea = ({ className, ...props }: TextAreaProps) => {
	return (
		<textarea
			className={twMerge(
				'bg-main-background text-base-content focus:ring-primary-focus w-full min-w-0 appearance-none rounded-md border border-main-border px-4 py-2 text-base placeholder-placeholder placeholder:text-[14px] focus:border-primary focus:outline-none',
				className
			)}
			{...props}
		/>
	);
};

export default TextArea;
