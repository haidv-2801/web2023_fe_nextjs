import { Article } from '@/src/commons/types';
import HtmlContentView from '@/src/components/features/htmlContent/HtmlContentView/HtmlContentView';
import Main from '@/src/layouts/main/Main';
import { notFound } from 'next/navigation';
import { useTranslation } from '../../../../i18n/server';
import { fetchArticle } from './service';
import Loading from '@/src/app/loading';
import './content.css';

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
