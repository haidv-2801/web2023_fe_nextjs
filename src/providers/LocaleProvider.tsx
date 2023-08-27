'use client';
import { useTranslation } from '@i18n/client';
import lang from '@i18n/vi/translation.json';
import createSafeContext from '@utils/createSafeContext';
import { ReactNode } from 'react';

interface LocaleConsumerProps {
	locale: string;
	// @ts-nocheck
	// @ts-ignore
	t: (key: NestedKeyOf<typeof lang>) => string;
	params: any;
}

const initValue: LocaleConsumerProps = {
	locale: 'vi',
	t: () => '',
	params: {},
};

export const [useContext, context] = createSafeContext<LocaleConsumerProps>(initValue);

export function LocaleProvider({
	children,
	currentLocale,
	params,
}: {
	children: ReactNode;
	currentLocale: string;
	params: any;
}) {
	const { t } = useTranslation(currentLocale);
	const providerValues: LocaleConsumerProps = {
		locale: currentLocale,
		// @ts-nocheck
		// @ts-ignore
		t: (key: NestedKeyOf<typeof lang>) => t(key),
		params: params,
	};

	return <context.Provider value={providerValues}>{children}</context.Provider>;
}

export const useLocale = useContext;

export default LocaleProvider;
