import { REVALIDATE } from '@/src/app/server-constant';
import { cache } from 'react';
import { fetcher } from '@/src/lib/api';
import { Article, ContactMe, LocaleCode } from '@/src/commons/types';

export interface Meta {}

export const fetchContactMe = cache(async (locale: LocaleCode): Promise<ContactMe | null> => {
	const res = await fetcher(`/contact-me?locale=${locale}`, {
		next: { revalidate: REVALIDATE },
	});

	if (!res.IsSuccess) return null;

	return { id: res.Data.data.id, ...res.Data.data.attributes } as ContactMe;
});
