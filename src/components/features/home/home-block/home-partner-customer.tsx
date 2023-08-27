'use client';
import SwipperSlider from '@/src/components/base/SwipperSlider/SwipperSlider';
import { useRouter } from 'next/navigation';
import React from 'react';
import './partnerCustomer.scss';

export default function HomePartnerCustomer(data: any) {
	const router = useRouter();
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
		<section className="partnerAndCustomer mx-auto my-10 flex w-full flex-col justify-center gap-6 md:flex-row">
			<section className="flex w-full flex-col self-center px-4 md:w-[45%] md:px-0">
				<div className="title mb-4 text-center text-[1.5rem] font-bold text-title-red md:text-[1.75rem]">
					ĐỐI TÁC TIN CẬY
				</div>
				<div className="">
					<SwipperSlider
						breakpoints={breakpoints}
						data={data?.data?.partners || []}
						imgWrapperClass="h-[150px] justify-center"
					/>
				</div>
			</section>
			<div className="w-[1px] shrink-0 bg-[#e5e5e5]"></div>
			<section className="flex w-full flex-col self-center px-4 md:w-[45%] md:px-0">
				<div className="title mb-4 text-center text-[1.5rem] font-bold text-title-red md:text-[1.75rem]">
					KHÁCH HÀNG
				</div>
				<div className="">
					{' '}
					<SwipperSlider
						breakpoints={breakpoints}
						data={data?.data?.customers || []}
						imgWrapperClass="h-[150px] justify-center"
					/>
				</div>
			</section>
		</section>
	);
}