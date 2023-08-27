import SwipperSlider from '@/src/components/base/SwipperSlider/SwipperSlider';
import { ReactNode } from 'react';
const images = [
	{
		url: 'https://images.unsplash.com/photo-1682687220199-d0124f48f95b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
		name: 'test',
		isFullUrl: true,
	},
];

const Layout = async ({
	children,
	params,
}: {
	children: ReactNode;
	params: { locale: string };
}) => {
	const { locale } = params;

	return <section>{children}</section>;
};

export default Layout;
