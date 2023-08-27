import 'server-only';
import { REVALIDATE } from '@/src/app/server-constant';
import { fetcher } from '@/src/lib/api';
import { cache } from 'react';

export const fetchArticle = cache(async (slug: string, locale: string) => {
	const response = await fetcher('/aritcles/' + slug + '?locale=' + locale, {
		next: { revalidate: REVALIDATE },
	});

	if (!response.IsSuccess || !response?.Data?.data) {
		return {
			data: null,
			meta: {},
		};
	}

	const data = { id: response.Data?.data.id, ...response.Data?.data.attributes };

	return {
		data,
	};
});
