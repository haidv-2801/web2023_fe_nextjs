import { LocaleCode, SubMenuItem } from '@/src/commons/types';
import SwipperSlider from '@/src/components/base/SwipperSlider/SwipperSlider';
import Footer from '@/src/layouts/footer/Footer';
import Header from '@/src/layouts/header/Header';
import AppProvider from '@/src/providers/AppProvider';
import { ReactNode, Suspense } from 'react';
import { fetchMenus } from './service';
import Main from '@/src/layouts/main/Main';
import { t } from 'i18next';
import { useTranslation } from '@/src/i18n/server';
import Loading from '../loading';
import QuickContact from '@/src/components/features/quickContact/QuickContact';

const Layout = async ({
	children,
	params,
}: {
	children: ReactNode;
	params: { locale: string };
}) => {
	const { locale } = params;
	const [menus, { t }] = await Promise.all([fetchMenus(locale), useTranslation(locale)]);
	const menusTransformed: SubMenuItem[] = transformDataMenu(menus);

	function transformDataMenu(menus: any) {
		if (!menus || !menus.data || !menus.data.length) return [];
		return menus.data.map((m: any) => {
			const { attributes, id } = m;
			const { items, ...rest } = attributes;
			return {
				id,
				...rest,
				items: items?.data?.map(
					(f: any) =>
						({
							id: f.id,
							slug: f.attributes.url,
							...f.attributes,
						} as SubMenuItem)
				),
			} as SubMenuItem;
		});
	}

	return (
		<section className="flex flex-col">
			<AppProvider currentLocale={locale} params={params}>
				<Header locale={locale as LocaleCode} pages={menusTransformed} />
				{/* <Suspense fallback={<Loading />}>{children}</Suspense> */}
				{children}
				<QuickContact />
				<Footer />
			</AppProvider>
		</section>
	);
};

export default Layout;
