'use client';
import { NEXT_LOCALE } from '@/src/commons/storageKeys';
import { LocaleCode } from '@/src/commons/types';
import { useLocale } from '@/src/providers/LocaleProvider';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { setCookie } from 'nookies';
import { Fragment, useState } from 'react';
import IconEN from '../../icons/IconEN';
import IconVN from '../../icons/IconVN';

const Language = () => {
	const { locale } = useLocale();
	const [selectedLocale, setSelectedLocale] = useState<LocaleCode>(locale as LocaleCode);
	const handleChangeLocale = (locale: LocaleCode) => {
		setSelectedLocale(locale);
		setCookie(null, NEXT_LOCALE, locale, {
			path: '/',
		});
		location.reload();
	};

	return (
		<div className="w-[160px] text-right">
			<Menu as="div" className="relative inline-block text-left">
				<div>
					<Menu.Button className="inline-flex w-full justify-center rounded-md bg-white bg-opacity-20 px-4 py-2 text-sm font-medium text-main hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
						{selectedLocale == 'vi' ? (
							<div className="flex items-center gap-1">
								<IconVN />
								{'VI'}
							</div>
						) : (
							<div className="flex items-center gap-1">
								<IconEN />
								{'EN'}
							</div>
						)}
						<ChevronDownIcon className="-mr-1 ml-2 h-5 w-5 text-main" aria-hidden="true" />
					</Menu.Button>
				</div>
				<Transition
					as={Fragment}
					enter="transition ease-out duration-100"
					enterFrom="transform opacity-0 scale-95"
					enterTo="transform opacity-100 scale-100"
					leave="transition ease-in duration-75"
					leaveFrom="transform opacity-100 scale-100"
					leaveTo="transform opacity-0 scale-95"
				>
					<Menu.Items className="absolute right-0 z-10 mt-2 w-[150px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
						<div className="px-1 py-1 ">
							<Menu.Item>
								{({ active }) => (
									<button
										className={`${
											active || selectedLocale == 'vi'
												? 'bg-[#e5e5e5] text-gray-900'
												: 'text-gray-900'
										} group mb-1 flex w-full items-center gap-2 rounded-md px-2 py-2 text-sm`}
										onClick={() => {
											handleChangeLocale('vi');
										}}
									>
										<IconVN />
										{'Tiếng Việt'}
									</button>
								)}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<button
										className={`${
											active || selectedLocale == 'en'
												? 'bg-[#e5e5e5] text-gray-900'
												: 'text-gray-900'
										} group flex w-full items-center gap-2 rounded-md px-2 py-2 text-sm`}
										onClick={() => {
											handleChangeLocale('en');
										}}
									>
										<IconEN />
										{'Tiếng Anh'}
									</button>
								)}
							</Menu.Item>
						</div>
					</Menu.Items>
				</Transition>
			</Menu>
		</div>
	);
};

export default Language;
