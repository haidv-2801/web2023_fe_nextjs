import dynamic from 'next/dynamic';
import { HomeBlockSingle as HomeBlockSingleType } from '../../commons/types';
import { fetchHome } from './service';
import { COMPONENT_BLOCK } from '@/src/commons/constants';
// import HomeHotNews from '@/src/components/features/home/home-block/home-hotnews';
// import HomeBlockSingle from '@components/features/home/home-block/home-block-single';
// import SwipperSlider from '@/src/components/base/SwipperSlider/SwipperSlider';
// import ListView from '@/src/components/features/listView/ListView';

const DynamicSwipperSlider = dynamic(
	() => import('@/src/components/base/SwipperSlider/SwipperSlider')
);

const DynamicHomeBlockSingle = dynamic(
	() => import('@components/features/home/home-block/home-block-single')
);

const DynamicHomePartnerCustomer = dynamic(
	() => import('@/src/components/features/home/home-block/home-partner-customer')
);

const DynamicHomeHotNews = dynamic(
	() => import('@/src/components/features/home/home-block/home-hotnews')
);

export async function generateMetadata({}) {
	return {
		title: 'Công ty Việt Com',
		description: 'The React Framework for the Web',
	};
}

type Props = {
	params: {
		locale: string;
	};
};

const HomePage = async ({ params }: Props) => {
	const { locale } = params;
	const [homeData] = await Promise.all([fetchHome(locale)]);
	let carousels =
		homeData?.find((h: any) => h.__component == COMPONENT_BLOCK.CAROUSELS)?.media ?? [];

	return (
		<>
			<DynamicSwipperSlider
				data={carousels}
				imgWrapperClass="h-[250px] w-auto md:h-[400px] lg:h-[650px]"
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
			/>
			{homeData
				.filter((f: HomeBlockSingleType) => f.show)
				.map((f: HomeBlockSingleType) => {
					if (f.__component == COMPONENT_BLOCK.PARTNER_CUSTOMER)
						return <DynamicHomePartnerCustomer data={f} />;

					if (f.__component == COMPONENT_BLOCK.HEAD_SMALL_TITLE)
						return <DynamicHomeBlockSingle data={f} />;

					if (f.__component == COMPONENT_BLOCK.ARTICLES)
						return <DynamicHomeHotNews data={f.articles} />;
				})}
		</>
	);
};

export default HomePage;
