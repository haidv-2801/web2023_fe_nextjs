import { twMerge } from 'tailwind-merge';

export const Skeleton = ({ className }: { className?: string }) => {
	return (
		<div role="status" className="animate-pulse">
			<div className={twMerge('h-2.5 rounded-full bg-gray-300 dark:bg-gray-700', className)}></div>
		</div>
	);
};
