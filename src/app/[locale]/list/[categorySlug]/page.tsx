import React from 'react';
import { LocaleCode } from '@/src/commons/types';
import SwipperSlider from '@/src/components/base/SwipperSlider/SwipperSlider';
import ListView from '@/src/components/features/listView/ListView';
import Main from '@/src/layouts/main/Main';
import { notFound } from 'next/navigation';
import Head from 'next/head';
import { FormatSeoTitle } from '@/src/utils/helpers';
import { fetchArticle } from './service';
import { fetchBanner } from '../../service';

type Props = {
	params: {
		locale: string;
		categorySlug: string;
	};
};

export default async function ListPage({ params }: Props) {
	const { locale, categorySlug } = params;
	const [posts, banner] = await Promise.all([
		fetchArticle(locale as LocaleCode, categorySlug),
		fetchBanner(locale, categorySlug),
	]);

	if (!posts || !posts.length) {
		notFound();
	}

	return (
		<main>
			{banner && banner?.attributes?.show ? (
				<div className="overlay relative">
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
				</div>
			) : null}
			<Main>
				<ListView data={posts} />
			</Main>
		</main>
	);
}
