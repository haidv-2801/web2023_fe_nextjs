import Main from '@/src/layouts/main/Main';
import { fetchRecruitments } from './service';
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

export default async function ClientPage({ params: { locale } }: Props) {
	const [recruitments, banner] = await Promise.all([
		fetchRecruitments(locale as LocaleCode),
		fetchBanner(locale, '/tuyen-dung'),
	]);

	if (!recruitments || !recruitments.length) {
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
				<ListView data={recruitments} />
			</Main>
		</main>
	);
}
