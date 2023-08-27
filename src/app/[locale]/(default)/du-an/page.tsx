import { PUBLIC_URL, REVALIDATE } from '@/src/app/server-constant';
import CustomLink from '@/src/components/base/CustomLink/CustomLink';
import Main from '@/src/layouts/main/Main';
import Image from '@components/base/Image/Image';
import { fetchProjects } from './service';
import { GetImageUrl } from '@/src/utils/helpers';
import { useEffect, useState } from 'react';
import { Article, LocaleCode } from '@/src/commons/types';
import ListView from '@/src/components/features/listView/ListView';
import { fetchBanner } from '../../service';
import SwipperSlider from '@/src/components/base/SwipperSlider/SwipperSlider';
import { notFound } from 'next/navigation';

type Post = {
	id: number;
	title: string;
	image: string;
	description: string;
};

const posts: Post[] = [
	{
		id: 1,
		title: 'Noteworthy technology acquisitions 2021',
		description:
			'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order',
		image: 'https://flowbite.com/docs/images/blog/image-1.jpg',
	},
	{
		id: 2,
		title: 'Noteworthy technology acquisitions 2021',
		description:
			'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
		image: 'https://flowbite.com/docs/images/blog/image-1.jpg',
	},
	{
		id: 3,
		title: 'Noteworthy technology acquisitions 2021',
		description:
			'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
		image: 'https://flowbite.com/docs/images/blog/image-1.jpg',
	},
	{
		id: 4,
		title: 'Noteworthy technology acquisitions 2021',
		description:
			'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
		image: 'https://flowbite.com/docs/images/blog/image-1.jpg',
	},
	{
		id: 5,
		title: 'Noteworthy technology acquisitions 2021',
		description:
			'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
		image: 'https://flowbite.com/docs/images/blog/image-1.jpg',
	},
	{
		id: 6,
		title: 'Noteworthy technology acquisitions 2021',
		description:
			'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
		image: 'https://flowbite.com/docs/images/blog/image-1.jpg',
	},
	{
		id: 7,
		title: 'Noteworthy technology acquisitions 2021',
		description:
			'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
		image: 'https://flowbite.com/docs/images/blog/image-1.jpg',
	},
	{
		id: 8,
		title: 'Noteworthy technology acquisitions 2021',
		description:
			'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
		image: 'https://flowbite.com/docs/images/blog/image-1.jpg',
	},
	{
		id: 9,
		title: 'Noteworthy technology acquisitions 2021',
		description:
			'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
		image: 'https://flowbite.com/docs/images/blog/image-1.jpg',
	},
	{
		id: 9,
		title: 'Noteworthy technology acquisitions 2021',
		description:
			'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order',
		image: 'https://flowbite.com/docs/images/blog/image-1.jpg',
	},
];

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
