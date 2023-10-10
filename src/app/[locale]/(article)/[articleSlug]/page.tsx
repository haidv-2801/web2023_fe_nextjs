import { Article } from '@/src/commons/types';
import HtmlContentView from '@/src/components/features/htmlContent/HtmlContentView/HtmlContentView';
import Main from '@/src/layouts/main/Main';
import { notFound } from 'next/navigation';
import { useTranslation } from '../../../../i18n/server';
import './content.css';
import { fetchArticle } from './service';
import { GetImageUrl } from '@/src/utils/helpers';
import format from 'react-string-format';

type Props = {
	params: {
		articleSlug?: string;
		locale: string;
	};
};

export default async function ClientPage({ params: { articleSlug, locale } }: Props) {
	const [{ data, meta }, { t }] = await Promise.all([
		fetchArticle(articleSlug ?? '', locale),
		useTranslation(locale, 'translation'),
	]);

	if (!data) {
		notFound();
	}

	return (
		<Main>
			<HtmlContentView article={data as Article} />
			<div className="mt-10">
				<div className="mb-6 h-[1px] w-full bg-main-border"></div>
				<div className="mt-6 text-[1.5rem] font-semibold text-title-red">
					{' '}
					{t('page.relatedPost')}
				</div>
			</div>
		</Main>
	);
}

// @ts-ignore
export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { articleSlug, locale } = params;
	const [{ data: article, meta }] = await Promise.all([fetchArticle(articleSlug ?? '', locale)]);

	return {
		title: article?.title,
		description: article?.description || '',
		keywords: ['VietcomLtd', article?.title || ''],
		openGraph: {
			title: article?.title,
			description: article?.description || '',
			url: process.env.NEXT_PUBLIC_URL + '/' + articleSlug,
			siteName: article?.title,
			images: [
				{
					url: GetImageUrl(article?.seo?.metaImage?.data?.attributes?.url),
					width: 800,
					height: 600,
				},
			],
			locale: 'vi_vn',
			type: 'website',
		},
	};
}
