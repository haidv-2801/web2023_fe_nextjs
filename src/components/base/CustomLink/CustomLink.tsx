import React from 'react';
import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export interface CustomLinkProps extends Omit<LinkProps, 'prefetch'> {
	children: ReactNode;
	className?: string;
}

const CustomLink = ({ children, className, href }: CustomLinkProps) => {
	return (
		<Link href={href} className={twMerge('hover:text-link', className)}>
			{children}
		</Link>
	);
};

export default CustomLink;
