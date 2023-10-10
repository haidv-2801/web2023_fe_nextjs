import { useTranslation } from '@/src/i18n/server';
import React from 'react';

type Props = {
	params: {
		locale: string;
	};
};

const AboutMeView = async ({ params }: Props) => {
	const { locale } = params;
	const [{ t }] = await Promise.all([useTranslation(locale)]);

	return (
		<div className="flex flex-col gap-2 md:gap-6">
			<h1 className="text-center text-2xl font-bold text-title-red md:my-6 md:text-3xl">
				{t('aboutMeView.companyName')}
			</h1>
			<div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
				<div className="flex-1 rounded-2xl border-main-border">
					<div className="flex h-full flex-col rounded-md p-6 py-4 shadow-base2">
						<h1 className="mb-4 text-2xl font-bold text-title-red md:text-3xl">
							{t('aboutMeView.history')}
						</h1>
						<p className="leading-6">{t('aboutMeView.historyDesc1')}</p>
					</div>
				</div>

				<div className="flex-1 rounded-2xl  border-main-border">
					<div className="flex h-full flex-col rounded-md p-6 py-4 shadow-base2">
						<h1 className="mb-4 text-2xl font-bold text-title-red md:text-3xl">
							{' '}
							{t('aboutMeView.vision')}
						</h1>
						<p className="leading-6">{t('aboutMeView.visionDesc1')}</p>
					</div>
				</div>

				<div className="flex-1 rounded-2xl  border-main-border">
					<div className="flex h-full flex-col rounded-md p-6  py-4 shadow-base2">
						<h1 className="mb-4 text-2xl font-bold text-title-red md:text-3xl">
							{' '}
							{t('aboutMeView.mission')}
						</h1>
						<p className="leading-6">{t('aboutMeView.missionDesc1')}</p>
					</div>
				</div>

				<div className="h-auto flex-1  rounded-2xl border-main-border">
					<div className="flex h-full flex-col rounded-md p-6 py-4 shadow-base2">
						<h1 className="mb-4 text-2xl font-bold text-title-red md:text-3xl">
							{t('aboutMeView.value')}
						</h1>
						<p className="leading-6">{t('aboutMeView.valueDesc1')}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMeView;
