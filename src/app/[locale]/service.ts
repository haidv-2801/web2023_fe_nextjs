import { REVALIDATE } from '@/src/app/server-constant';
import { COMPONENT_BLOCK } from '@/src/commons/constants';
import { fetcher, getFullUrl, getHeaders } from '@/src/lib/api';
import { cache } from 'react';

export const fetchMenus = cache(async (locale: string) => {
	const response = await fetcher(`/menus?populate=*&locale=${locale}`, {
		next: { revalidate: REVALIDATE },
	});

	if (!response.IsSuccess) {
		return [];
	}

	return response.Data;
});

export const fetchHome = cache(async (locale: string) => {
	const response = await fetcher(`/home-page?populate=deep,4&locale=${locale}`, {
		next: { revalidate: REVALIDATE },
	});

	if (!response.IsSuccess) {
		return [];
	}

	let homeData = response.Data?.data?.attributes?.HomeBock;

	homeData = homeData.map((f: any) => {
		switch (f.__component) {
			case COMPONENT_BLOCK.HEAD_SMALL_TITLE:
				return { ...f, media: { ...f.media?.data?.[0]?.attributes?.formats?.medium } };
			case COMPONENT_BLOCK.PARTNER_AND_CUSTOMER:
				return { data: f.partners?.data?.map((f: any) => ({ id: f.id, ...f.attributes })) };
			case COMPONENT_BLOCK.PARTNER_CUSTOMER:
				return {
					__component: f?.__component,
					show: f?.show,
					partners: f?.partners?.data?.map((f: any) => ({ ...f.attributes?.formats?.small })),
					customers: f?.customers?.data?.map((f: any) => ({ ...f.attributes?.formats?.small })),
				};
			case COMPONENT_BLOCK.CAROUSELS:
				return {
					...f,
					media: [
						...f.media?.data?.map((p: any) => ({
							url: p?.attributes?.url,
							name: p?.attributes?.alternativeText ?? p?.attributes?.caption,
						})),
					],
				};
			case COMPONENT_BLOCK.ARTICLES:
				return {
					__component: f.__component,
					show: true,
					articles: f.aritcles.data.map((p: any) => ({
						id: p.id,
						...p.attributes,
						image: p.attributes?.image?.data?.attributes?.formats?.medium,
					})),
				};
			default:
				break;
		}
		return f;
	});

	return homeData;
});

export const fetchBanner = cache(async (locale: string, path: string) => {
	const headers = getHeaders(),
		url = getFullUrl('/search'),
		body = {
			query: {
				where: {
					path_to_show: {
						$contains: path,
					},
					locale: {
						$eq: locale,
					},
				},
				populate: ['image'],
				offset: 0,
				limit: 1,
			},
			schema: 'api::banner.banner',
		};

	const response = await fetch(url, {
		headers,
		next: { revalidate: REVALIDATE },
		body: JSON.stringify(body),
		method: 'POST',
	});
	const data = await response.json();
	if (data?.data && Array.isArray(data?.data)) return data?.data[0];
	return null;
});
