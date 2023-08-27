'use client';
import { HomeBlockSingle } from '@/src/commons/types';
import Button from '@/src/components/base/Button/Button';
import Image from '@/src/components/base/Image/Image';
import { GetClientImageUrl, GetImageUrl } from '@/src/utils/helpers';
import { useRouter } from 'next/navigation';
import React from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
	data?: HomeBlockSingle;
};

export default function HomeBlockSingle({ data }: Props) {
	const router = useRouter();
	const leftImage = data?.image_position == 'Bên trái';

	return (
		<section
			style={{ backgroundColor: data?.background_color }}
			className={`md:my6 mx-auto my-0 flex min-h-[400px]  w-full flex-col-reverse gap-6 px-4 py-[110px] pb-10 pt-10 ${
				leftImage ? 'md:flex-row-reverse' : 'md:flex-row'
			} lg:px-8`}
		>
			<div className="flex flex-[2] flex-col gap-6 pr-6">
				<div className="flex w-full flex-col">
					<div className="w-fit border-l-2 border-l-title-red pl-6 text-center font-semibold text-title-red">
						{data?.head_small_title}
					</div>
					<div className="mb-4 mt-2 pl-[24px]  text-[1.5rem] font-bold text-title-red md:text-[1.75rem]">
						{data?.head_title}
					</div>
					<div className="pl-[24px]">{data?.description}</div>
				</div>
				<Button
					onClick={() => {
						router.push(data?.button.link ?? '');
					}}
					style={{ backgroundColor: data?.button.bg_color }}
					className={twMerge(
						`mx-auto mt-auto w-fit rounded-none bg-primary text-white hover:opacity-90 md:mx-0 md:ml-6`
					)}
				>
					{data?.button.title}
				</Button>
			</div>
			<div className="h-full flex-1">
				<Image
					alt={data?.media?.name as string}
					src={GetImageUrl(data?.media?.url as string)}
					className="h-auto max-h-full max-w-full rounded-[4px] object-cover transition-all duration-300 hover:scale-105"
					width={1000}
					height={200}
					fill={true}
					lazyBlur={false}
				/>
			</div>
		</section>
	);
}
