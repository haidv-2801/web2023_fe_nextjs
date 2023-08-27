'use client';
import { Article } from '@/src/commons/types';
import SwipperSlider from '@/src/components/base/SwipperSlider/SwipperSlider';
import { useRouter } from 'next/navigation';
import React from 'react';
import ListView from '../../listView/ListView';

export default function HomeHotNews({ data }: { data: Article[] }) {
	const router = useRouter();

	return (
		<section className="mx-auto my-10 flex w-full flex-col justify-center gap-6 bg-slate-50">
			<div className=" title mb-4 mt-10 text-center text-[1.5rem] font-bold text-title-red md:text-[1.75rem]">
				TIN MỚI NHẤT
			</div>
			<ListView data={data} />
		</section>
	);
}
