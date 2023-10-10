'use client';
import { Article, LocaleCode } from '@/src/commons/types';
import { useRouter } from 'next/navigation';
import ListView from '../../listView/ListView';
import { useTranslation } from '@/src/i18n/client';

export default function HomeHotNews({ data, locale }: { data: Article[]; locale: LocaleCode }) {
	const router = useRouter();

	const { t } = useTranslation(locale);

	return (
		<section className="mx-auto flex w-full flex-col justify-center gap-6 bg-slate-50 py-10">
			<div className=" title mb-4 mt-10 text-center text-[1.5rem] font-bold text-title-red md:text-[1.75rem]">
				{t('page.lastestNews').toUpperCase()}
			</div>
			<ListView data={data} />
		</section>
	);
}
