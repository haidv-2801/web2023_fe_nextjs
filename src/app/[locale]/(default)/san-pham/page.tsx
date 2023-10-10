import Main from '@/src/layouts/main/Main';
import { fetchProducts } from './service';
import ListView from '@/src/components/features/listView/ListView';
import { LocaleCode } from '@/src/commons/types';
import { notFound } from 'next/navigation';
import { fetchBanner } from '../../service';
import SwipperSlider from '@/src/components/base/SwipperSlider/SwipperSlider';

type Props = {
	params: {
		locale: string;
	};
};

export async function generateMetadata({ params }: Props) {
	const { locale } = params;

	return {
		title: locale == 'vi' ? 'Sản phẩm' : 'Products',
	};
}

export default async function ClientPage({ params: { locale } }: Props) {
	const [products, banner] = await Promise.all([
		fetchProducts(locale as LocaleCode),
		fetchBanner(locale, '/san-pham'),
	]);

	if (!products || !products.length) {
		notFound();
	}

	return (
		<main>
			{banner && banner?.attributes?.show ? (
				<SwipperSlider
					breakpoints={{
						640: {
							slidesPerView: 1,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 1,
							spaceBetween: 20,
						},
						1024: {
							slidesPerView: 1,
							spaceBetween: 20,
						},
					}}
					data={[{ ...banner?.attributes?.image?.data?.attributes, isFullUrl: false }]}
					imgWrapperClass="h-[250px] w-auto md:h-[400px]"
				/>
			) : null}
			<Main>
				<ListView data={products} />
			</Main>
		</main>
	);
}
