import { REVALIDATE } from '@/src/app/server-constant';
import { Article, LocaleCode } from '@/src/commons/types';
import { fetcher } from '@/src/lib/api';
import { cache } from 'react';
import 'server-only';

export const fetchArticle = cache(
	async (locale: LocaleCode, categorySlug: string): Promise<Article[]> => {
		const res = await fetcher(`/aritcle/category/${categorySlug}?locale=${locale}`, {
			next: { revalidate: REVALIDATE },
		});
		if (!res.IsSuccess) return [];

		return res.Data.data.map((f: any) => ({
			id: f.id,
			...f.attributes,
			image: f.attributes?.image?.data?.attributes?.formats?.medium,
		}));
	}
);
