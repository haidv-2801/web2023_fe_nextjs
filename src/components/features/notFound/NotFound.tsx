import React from 'react';
import Button from '@components/base/Button/Button';
import CustomLink from '@components/base/CustomLink/CustomLink';

const NotFound = () => {
	return (
		<main className="bg-main-background flex h-full w-full flex-col items-center justify-center pb-20 pt-20">
			<h1 className="text-9xl font-extrabold tracking-widest text-primary">404</h1>
			<div className="bg-warning absolute rotate-12 rounded px-2 text-sm">Page Not Found</div>
			<CustomLink href={'/'}>
				<Button className="btn-warning">Go home</Button>
			</CustomLink>
		</main>
	);
};

export default NotFound;
