import './globals.css';

import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import Loading from './loading';

const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
// 	title: 'VietcomLtd',
// 	description: 'VietcomLtd Web',
// };

const RootLayout = ({ children }: { children: ReactNode }) => {
	return (
		<html>
			<body className={inter.className}>{children}</body>
		</html>
	);
};

export default RootLayout;
