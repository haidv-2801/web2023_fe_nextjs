'use client';
import SwipperSlider from '@/src/components/base/SwipperSlider/SwipperSlider';
import { useRouter } from 'next/navigation';
import React from 'react';
import './partnerCustomer.scss';
import { LocaleCode } from '@/src/commons/types';
import { useTranslation } from '@/src/i18n/client';

export default function HomePartnerCustomer({ data, locale }: { locale: LocaleCode; data: any }) {
	const router = useRouter();
	const { t } = useTranslation(locale);
	const breakpoints = {
		340: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		640: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
	};

	return (
		<section className="partnerAndCustomer relative mx-auto flex w-full flex-col justify-center gap-6 py-[110px] shadow-base1 md:flex-row">
			<div className="partnerAndCustomerOverlay absolute z-10 h-full"></div>
			<section className="partnerAndCustomerPartner flex w-full flex-col self-center px-4 md:w-[45%] md:px-0">
				<div className="title mb-6 text-center text-[1.5rem] font-bold text-title-red md:text-[1.75rem]">
					{t('page.trustlyPartner').toUpperCase()}
				</div>
				<div className="">
					<SwipperSlider
						breakpoints={breakpoints}
						data={data?.partners || []}
						imgWrapperClass="h-[150px] justify-center"
					/>
				</div>
			</section>
			<div className="w-[1px] shrink-0 bg-[#e5e5e5]"></div>
			<section className="flex w-full flex-col self-center px-4 md:w-[45%] md:px-0">
				<div className="title mb-6 text-center text-[1.5rem] font-bold text-title-red md:text-[1.75rem]">
					{t('page.customer').toUpperCase()}
				</div>
				<div className="">
					{' '}
					<SwipperSlider
						breakpoints={breakpoints}
						data={data?.customers || []}
						imgWrapperClass="h-[150px] justify-center"
					/>
				</div>
			</section>
		</section>
	);
}
