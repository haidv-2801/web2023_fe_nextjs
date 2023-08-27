'use client';
import { Article } from '@/src/commons/types';
import React, { useMemo } from 'react';
import { load } from 'cheerio';
import { GetClientImageUrl } from '@/src/utils/helpers';
import IconTime from '@/src/components/icons/IconTime';
import { formatDDMMYYYY } from '@/src/utils/dateTime';
import IconUser from '@/src/components/icons/IconUser';
import IconEye from '@/src/components/icons/IconEye';

const HtmlContentView = ({ article }: { article: Article }) => {
	const domContentMemo = useMemo(() => {
		if (!article.content) return <div className="text-[1.5rem] text-main">No content!</div>;
		const $ = load(article.content ?? '');
		$('img').each(function () {
			if (!this || !$(this)) return;
			const src = $(this).attr('src');
			$(this).attr('src', GetClientImageUrl(src as string));
		});
		const content = $('html body').contents().toString();

		return (
			<>
				<h1 className="text-3xl font-bold text-title-red">{article.title}</h1>
				<div className="mb-6 mt-3 flex items-center gap-2 text-[14px]">
					<div className="flex items-center gap-1">
						<IconTime className="flex-shrink-0" /> Posted on: {formatDDMMYYYY(article.createdAt)}
					</div>
					<div className="flex items-center gap-1">
						<IconUser className="flex-shrink-0" /> Admin{' '}
					</div>
					<div className="flex items-center gap-1">
						<IconEye className="flex-shrink-0" />
						{article.views}
					</div>
				</div>
				<div className="mb-6 h-[1px] w-full bg-main-border"></div>
				<div id="block-html" dangerouslySetInnerHTML={{ __html: content }} />
				<div style={{ clear: 'both' }}></div>
			</>
		);
	}, [article.content, article.createdAt, article.title, article.views]);

	return <div>{domContentMemo}</div>;
};

export default HtmlContentView;
