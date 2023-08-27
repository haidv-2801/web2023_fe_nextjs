import { REVALIDATE } from '@/src/app/server-constant';
import { cache } from 'react';
import { fetcher } from '@/src/lib/api';
import { Article, LocaleCode } from '@/src/commons/types';
import { LogDebug } from '@/src/utils/file';

export const fetchProducts = cache(async (locale: LocaleCode): Promise<Article[]> => {
	const res = await fetcher(`/aritcle/category/san-pham?locale=${locale}`, {
		next: { revalidate: REVALIDATE },
	});

	if (!res.IsSuccess) return [];
	const data = res.Data.data.map((f: any) => ({
		id: f.id,
		...f.attributes,
		image: f.attributes?.image?.data?.attributes?.formats?.medium,
	}));

	await LogDebug(data);
	return data;
});
