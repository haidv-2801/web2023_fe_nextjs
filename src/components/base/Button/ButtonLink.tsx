import React from 'react';
import Button, { ButtonProps } from './Button';
import { twMerge } from 'tailwind-merge';

interface ButtonLinkProps extends ButtonProps {}
const ButtonLink = ({ className, children }: ButtonLinkProps) => {
	return (
		<Button
			className={twMerge('btn-link hover:text-link font-bold no-underline !shadow-none', className)}
		>
			{children}
		</Button>
	);
};
export default ButtonLink;
export { ButtonLink };
