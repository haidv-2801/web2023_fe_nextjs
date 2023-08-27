'use client';
import React from 'react';
import Main from '@/src/layouts/main/Main';
import { revalidatePath } from 'next/cache';
import { useRouter } from 'next/navigation';

const Search = ({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined };
}) => {
	const router = useRouter();
	return (
		<Main>
			{searchParams['s'] ? (
				<div className="flex gap-2">
					Kết quả tìm kiếm với từ khóa:{' '}
					<div className="bg-yellow-300 font-semibold text-title-red">{searchParams['s']}</div>
				</div>
			) : null}
			<div className="flex">
				<div className="">Lọc: </div>
				<div
					className="cursor-pointer font-semibold text-title-red underline hover:opacity-80"
					onClick={() => {
						router.push('/search');
						revalidatePath('/');
					}}
				>
					Tất cả
				</div>
			</div>
		</Main>
	);
};

export default Search;
