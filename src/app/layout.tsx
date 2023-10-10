import './globals.css';

import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: {
		template: '%s | VietcomLtd - Giải pháp y tế',
		default: 'VietcomLtd',
	},
	description: 'vietcomltd.vn',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
	return (
		<html>
			<body className={inter.className}>{children}</body>
		</html>
	);
};

export default RootLayout;
