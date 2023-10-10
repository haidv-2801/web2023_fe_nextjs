import { REVALIDATE } from '@/src/app/server-constant';
import { cache } from 'react';
import { fetcher } from '@/src/lib/api';
import { Article, LocaleCode } from '@/src/commons/types';

export const fetchRecruitments = cache(async (locale: LocaleCode): Promise<Article[]> => {
	const res = await fetcher(`/aritcle/category/tuyen-dung?locale=${locale}`, {
		next: { revalidate: REVALIDATE },
	});

	if (!res.IsSuccess) return [];

	return res.Data.data.map((f: any) => ({
		id: f.id,
		...f.attributes,
		image: f.attributes?.image?.data?.attributes,
	}));
});
