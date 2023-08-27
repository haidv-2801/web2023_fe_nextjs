import { LocaleCode } from '@/src/commons/types';
import ListView from '@/src/components/features/listView/ListView';
import Search from '@/src/components/features/search/search';
import Main from '@/src/layouts/main/Main';
import { getFullUrl, getHeaders } from '@/src/lib/api';
import { transformData } from '@/src/utils/helpers';
import { cache } from 'react';

const fetchArticlesSearch = cache(
	async (locale: LocaleCode, searchObject: { [key: string]: string | string[] | undefined }) => {
		const search = (searchObject['s'] ? (searchObject['s'] as string) : '').trim();
		let query = {
			where: {
				$and: [
					{
						$or: [
							{
								title: {
									$contains: search,
								},
							},
							{
								description: {
									$contains: search,
								},
							},
						],
					},
					{
						locale: {
							$eq: locale,
						},
					},
				],
			},
			populate: ['admin_user', 'image'],
		};

		if (!search) {
			query = {
				where: {
					$and: [
						{
							locale: {
								$eq: locale,
							},
						},
					],
				},
				populate: ['admin_user', 'image'],
			};
		}

		const headers = getHeaders(),
			url = getFullUrl('/articles/search');

		const res = await fetch(url, {
			method: 'POST',
			headers,
			body: JSON.stringify(query),
		});

		const data = await res.json();
		return data;
	}
);

const Page = async ({
	params: { locale },
	searchParams,
}: {
	params: { locale: string };
	searchParams: { [key: string]: string | string[] | undefined };
}) => {
	const data = transformData(await fetchArticlesSearch(locale as LocaleCode, searchParams));

	return (
		<div>
			<Main>
				<Search searchParams={searchParams} />
				<ListView data={data} />
				{!data.length && <div>Không có kết quả phù hợp</div>}
			</Main>
		</div>
	);
};

export default Page;
