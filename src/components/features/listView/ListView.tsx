'use client';
import { Article } from '@/src/commons/types';
import { GetImageUrl } from '@/src/utils/helpers';
import CustomLink from '../../base/CustomLink/CustomLink';
import Image from '../../base/Image/Image';

const ListView = ({ data }: { data: Article[] }) => {
	return (
		<ul
			role="list"
			className="mx-auto my-6 grid max-w-7xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:px-6 md:grid-cols-3 lg:grid-cols-4 lg:px-8"
		>
			{data.map((p) => (
				<div className="mx-auto max-w-lg" key={p.id}>
					<div className="mb-5  overflow-hidden border-gray-200 bg-white">
						<CustomLink href={p.slug} className="h-[165px]">
							<Image
								src={GetImageUrl(p.image?.url ?? '')}
								alt={p.title}
								className="h-auto max-h-[165px] min-h-[165px] max-w-full rounded-[4px] object-cover transition-all duration-300 hover:scale-105"
								width={1000}
								height={100}
								fill={true}
								lazyBlur={false}
							/>
						</CustomLink>

						<div className="p-5">
							<CustomLink href={p.slug} className="cursor-pointer hover:opacity-70">
								<h5 className="mb-2 text-xl font-bold leading-base tracking-tight text-title-red">
									{p.title}
								</h5>
							</CustomLink>
							<p className="mb-3 font-normal leading-base text-gray-700">
								{(p.description ?? '').substring(0, 48) + '...'}
							</p>
							<CustomLink
								href={p.slug}
								className="inline-flex items-center  px-3 py-2 text-center text-sm font-medium  hover:text-title-red focus:ring-4 focus:ring-blue-300"
							>
								Xem thêm --{'>'}
							</CustomLink>
						</div>
					</div>
				</div>
			))}
		</ul>
	);
};

export default ListView;
