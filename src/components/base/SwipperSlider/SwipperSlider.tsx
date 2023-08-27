'use client';
import 'swiper/css';
import 'swiper/css/pagination';
import React, { HTMLAttributes, InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import { Pagination } from 'swiper';
import styles from './swipperSlider.module.scss';
import Image from 'next/image';
import Logo from '/public/assets/images/logo-vietcom.png';
import { GetImageUrl } from '@/src/utils/helpers';

SwiperCore.use([Autoplay]);

type Props = {
	data: Array<any>;
	breakpoints: any;
	className?: string;
	imgWrapperClass: string;
};

const SwipperSlider = ({ className, imgWrapperClass, breakpoints, data, ...props }: Props) => {
	return (
		<Swiper
			speed={2000}
			wrapperClass={styles.wrapperClass}
			slidesPerView={1}
			spaceBetween={10}
			autoplay={{ delay: 2000 }}
			pagination={{
				clickable: true,
			}}
			breakpoints={breakpoints}
			modules={[Pagination]}
		>
			{data.map((f: any) => (
				<SwiperSlide key={f?.url}>
					<div className={twMerge(imgWrapperClass)}>
						<Image
							src={f?.isFullUrl ? f?.url : GetImageUrl(f?.url)}
							alt={f?.name}
							className="min-h-full object-cover"
							fill
						></Image>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default SwipperSlider;
