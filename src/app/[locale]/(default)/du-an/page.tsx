import { LocaleCode } from '@/src/commons/types';
import SwipperSlider from '@/src/components/base/SwipperSlider/SwipperSlider';
import ListView from '@/src/components/features/listView/ListView';
import Main from '@/src/layouts/main/Main';
import { notFound } from 'next/navigation';
import { fetchBanner } from '../../service';
import { fetchProjects } from './service';

type Post = {
	id: number;
	title: string;
	image: string;
	description: string;
};

type Props = {
	params: {
		locale: string;
	};
};

export default async function ProjectPage({ params }: Props) {
	const { locale } = params;
	const [projects, banner] = await Promise.all([
		fetchProjects(locale as LocaleCode),
		fetchBanner(locale, '/du-an'),
	]);

	if (!projects || !projects.length) {
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
				<ListView data={projects} />
			</Main>
		</main>
	);
}
