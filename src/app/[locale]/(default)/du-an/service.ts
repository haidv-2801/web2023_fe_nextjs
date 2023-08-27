import 'server-only';
import { REVALIDATE } from '@/src/app/server-constant';
import { cache } from 'react';
import { fetcher } from '@/src/lib/api';
import { Article, LocaleCode } from '@/src/commons/types';
import { stringify } from 'querystring';

export const fetchProjects = cache(async (locale: LocaleCode): Promise<Article[]> => {
	const res = await fetcher(`/aritcle/category/du-an?locale=${locale}`, {
		next: { revalidate: REVALIDATE },
	});

	if (!res.IsSuccess) return [];

	return res.Data.data.map((f: any) => ({
		id: f.id,
		...f.attributes,
		image: f.attributes?.image?.data?.attributes?.formats?.medium,
	}));
});
