import { ReactNode } from 'react';
import LocaleProvider from './LocaleProvider';
import ReduxProvider from './ReduxProvider';

type Props = {
	children: ReactNode;
	currentLocale: string;
	params: any;
};

const AppProvider = ({ children, currentLocale, params }: Props) => {
	return (
		<>
			<LocaleProvider params={params} currentLocale={currentLocale}>
				<ReduxProvider>{children}</ReduxProvider>
			</LocaleProvider>
		</>
	);
};
export default AppProvider;
