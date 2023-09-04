'use client';
import { Header, LocaleCode, SubMenuItem } from '@/src/commons/types';
import CustomLink from '@/src/components/base/CustomLink/CustomLink';
import InputBase from '@/src/components/base/InputBase/InputBase';
import Language from '@/src/components/base/Language/Language';
import { useTranslation } from '@/src/i18n/client';
import { GetMenuTitleByLocale } from '@/src/utils/helpers';
import { Dialog, Popover, Transition } from '@headlessui/react';
import { Bars3Icon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Fragment, cache, useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import LogoVietcom from '/public/assets/images/vietcom.png';
import useWindowDimensions, { getWindowDimensions } from '@/src/hooks/useWindowDimension';
import { useRouter } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import IconDown from '@/src/components/icons/IconDown';
import useScrollToTop from '@/src/hooks/useScrollToTop';
import ButtonScrollTop from '@/src/components/features/ButtonScrollTop/ButtonScrollTop';
import { getFullUrlClient, getHeaders } from '@/src/lib/api';
import { REVALIDATE } from '@/src/app/server-constant';
import { FALL_BACK } from '@/src/commons/constants';
import IconPhone from '@/src/components/icons/IconPhone';
import IconInbox from '@/src/components/icons/IconInbox';
import IconTime from '@/src/components/icons/IconTime';

type Props = {
	locale: LocaleCode;
	pages: SubMenuItem[];
};

export default function Header({ locale, pages }: Props) {
	const router = useRouter();
	const pathname = usePathname();
	const { t } = useTranslation(locale, 'menu');
	const [open, setOpen] = useState(false);
	const [isScrollBottom, setIsScrollBottom] = useState(false);
	const [showSubMenu, setShowSubMenu] = useState<number>(-1);
	const fixed = 'fixed top-0 z-10 ';
	const [showSearch, setShowSearch] = useState<boolean>(false);
	const [isSearchSmall, setIsSearchSmall] = useState<boolean>(false);
	const [searchValue, setSearchValue] = useState<string>('');
	const { height, width } = useWindowDimensions();
	const [header, setHeader] = useState<Header | undefined>();

	useScrollToTop();

	useEffect(() => {
		document.addEventListener('scroll', (event) => {
			if (window.pageYOffset > 120) {
				setIsScrollBottom(true);
			}
			if (window.pageYOffset == 0) {
				setIsScrollBottom(false);
			}
		});

		(async () => {
			const data: Header = await getHeader(locale as LocaleCode);
			console.log('data :>> ', data);
			setHeader(data);
		})();
	}, []);

	const getHeader = cache(async (locale: LocaleCode) => {
		const headers = {
				...getHeaders(),
				Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_API_TOKEN_READ_ONLY,
			},
			url = getFullUrlClient(`/search`),
			body = {
				query: {},
				schema: 'api::header.header',
			};

		const res = await fetch(url, {
			headers,
			next: { revalidate: REVALIDATE },
			method: 'POST',
			body: JSON.stringify(body),
		});

		const data = await res.json();

		return !data?.data ? undefined : data?.data?.[0]?.attributes;
	});

	const handleShowSearch = () => {
		if (width <= 520) {
			setIsSearchSmall(!isSearchSmall);
		} else {
			setShowSearch(!showSearch);
		}
	};

	return (
		<div
			className={twMerge(
				'my_header h-[102px] w-full bg-white transition delay-150 ease-in-out lg:h-[144px]',
				isScrollBottom ? fixed : ''
			)}
		>
			{/* Mobile menu */}
			<Transition.Root show={open} as={Fragment}>
				<Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
					<div className="fixed inset-0 z-40 flex">
						<Transition.Child
							as={Fragment}
							enter="transition ease-in-out duration-300 transform"
							enterFrom="-translate-x-full"
							enterTo="translate-x-0"
							leave="transition ease-in-out duration-300 transform"
							leaveFrom="translate-x-0"
							leaveTo="-translate-x-full"
						>
							<Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
								<div className="flex h-[56px] bg-primary">
									<button
										type="button"
										className="-m-2 inline-flex items-center justify-center rounded-md p-2 pl-4 text-white"
										onClick={() => setOpen(false)}
									>
										<span className="sr-only">Close menu</span>
										<XMarkIcon className="h-6 w-6" aria-hidden="true" />
									</button>
								</div>
								<div className="space-y-6 border-t border-gray-200 px-4 py-6">
									{pages.map((page, idx) => (
										<Popover key={page.title} className="flex">
											{({ open }) => (
												<>
													<div className="relative flex">
														{page.items.length ? (
															<div className="flex flex-col">
																<div
																	className={twMerge(
																		'flex w-full cursor-pointer items-center  text-sm  font-medium uppercase outline-none transition-colors duration-200  ease-out hover:text-title-red'
																	)}
																	onClick={() => {
																		if (idx == showSubMenu) setShowSubMenu(-1);
																		else setShowSubMenu(idx);
																	}}
																	style={showSubMenu == idx ? { marginBottom: 16 } : {}}
																>
																	{GetMenuTitleByLocale(page.title, locale)}
																</div>

																{showSubMenu == idx ? (
																	<ul className="flex flex-col pl-4 text-sm uppercase">
																		{page.items.map((item) => (
																			<li
																				key={item.title}
																				className="mb-2 flex hover:underline"
																				onClick={() => {
																					setOpen(false);
																					setShowSubMenu(-1);
																				}}
																			>
																				<CustomLink
																					href={item.slug}
																					className=" font-medium hover:text-title-red"
																				>
																					{'>>'}
																					{GetMenuTitleByLocale(item.title, locale)}
																				</CustomLink>
																			</li>
																		))}
																	</ul>
																) : null}
															</div>
														) : (
															<CustomLink
																href={page.slug}
																className="flex w-full items-center text-sm font-medium uppercase outline-none transition-colors duration-200 ease-out  hover:text-title-red"
															>
																<span
																	onClick={() => {
																		setOpen(false);
																	}}
																>
																	{GetMenuTitleByLocale(page.title, locale)}
																</span>
															</CustomLink>
														)}
													</div>
												</>
											)}
										</Popover>
									))}
								</div>
								<div className="border-t border-gray-200 px-4 py-6">
									<Language />
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition.Root>

			<header
				className={twMerge('relative h-full border-b border-gray-200 bg-white shadow-header')}
			>
				<div className="header-top ml-auto hidden h-[40px] w-[calc(100vw-232px)] items-center justify-end bg-primary  pr-5 text-ssm text-white lg:flex">
					<div className="phone flex items-center gap-2 border-r border-white px-4 hover:cursor-pointer hover:text-title-red hover:underline">
						<IconPhone width={16} height={16} />
						<a href={`tel:${header?.phone}`}> {header?.phone ?? FALL_BACK.TYPE1} </a>
					</div>
					<div className="email flex items-center gap-2 border-r border-white px-4 hover:cursor-pointer hover:text-title-red hover:underline">
						<IconInbox width={16} height={16} />
						<a href={`mailto:${header?.email}?subject=Subject email!`}>
							{header?.email ?? FALL_BACK.TYPE1}
						</a>
					</div>
					<div className="work-time flex items-center gap-2 px-4 text-white hover:cursor-pointer hover:text-title-red">
						<IconTime className="stroke-white" width={16} height={16} />
						{header?.work_time ?? FALL_BACK.TYPE1}
					</div>
				</div>
				{/* max-w-7xl */}
				<nav aria-label="Top" className="mx-auto  h-[103px] px-4 sm:px-6 lg:px-8">
					<div className="flex h-full items-center">
						<button
							type="button"
							className="ml-auto rounded-md bg-white p-2 lg:hidden"
							onClick={() => setOpen(true)}
						>
							<span className="sr-only">Open menu</span>
							<Bars3Icon className="h-6 w-6" aria-hidden="true" />
						</button>

						{/* Logo */}
						<div className="absolute top-0 ml-4 flex lg:ml-0">
							<a onClick={() => router.push('/')}>
								<span className="sr-only">VietcomLtd</span>
								<Image
									className="h-24 w-auto lg:h-36"
									priority
									src={LogoVietcom}
									alt="Công ty Việt Com"
								/>
							</a>
						</div>

						<div className="hidden h-full pl-[150px] lg:flex">
							{/* Mega menus */}
							<Popover.Group className="ml-8">
								<div className="flex h-full justify-center space-x-8">
									{pages.map((page, idx) => (
										<Popover key={page.title} className="flex">
											{({ open, close }) => (
												<>
													<div className="relative flex">
														{page.items.length ? (
															<Popover.Button
																className={twMerge(
																	open
																		? 'border-title-red  text-title-red'
																		: 'flex items-center border-transparent',
																	' relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm  font-medium uppercase',
																	'outline-none transition-colors duration-200 ease-out hover:text-title-red',
																	'headless-button',
																	pathname.includes(page.slug) &&
																		'border-b-2 border-title-red text-title-red',
																	'flex gap-1'
																)}
															>
																{GetMenuTitleByLocale(page.title, locale)}
																<IconDown />
															</Popover.Button>
														) : (
															<CustomLink
																href={page.slug}
																className={twMerge(
																	'flex items-center text-sm  font-medium uppercase outline-none transition-colors duration-200 ease-out  hover:text-title-red',
																	pathname.includes(page.slug) &&
																		'border-b-2 border-title-red text-title-red'
																)}
															>
																{GetMenuTitleByLocale(page.title, locale)}
															</CustomLink>
														)}
													</div>

													<Transition
														as={Fragment}
														enter="transition ease-out duration-200"
														enterFrom="opacity-0"
														enterTo="opacity-100"
														leave="transition ease-in duration-150"
														leaveFrom="opacity-100"
														leaveTo="opacity-0"
													>
														<Popover.Panel className=" sm: absolute inset-x-0 top-[144px] z-10  text-gray-500">
															<div
																className={twMerge(
																	' absolute inset-0 top-1/2 bg-white  shadow',
																	'headless__panel'
																)}
																aria-hidden="true"
															/>
															<div
																className={twMerge(
																	' relative bg-white ',
																	'headless__panel',
																	'border-t-[1px] border-solid border-t-[#e5e5e5]'
																)}
															>
																<div className="mx-auto max-w-7xl px-8">
																	<div className="border-1 grid grid-cols-1 items-start gap-x-8 gap-y-10 pb-12 pt-10">
																		<div className="grid grid-cols-1 gap-x-8 gap-y-10">
																			<ul
																				role="list"
																				aria-labelledby={`desktop-featured-heading-${idx}`}
																				className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
																			>
																				<li onClick={close} className="flex">
																					<CustomLink
																						href={page.slug}
																						className="text-sm uppercase hover:text-title-red"
																					>
																						{'>> '}
																						{GetMenuTitleByLocale(page.title, locale)}
																					</CustomLink>
																				</li>
																				{page.items.map((item) => (
																					<li key={item.title} onClick={close} className="flex">
																						<CustomLink
																							href={item.slug}
																							className="text-sm uppercase hover:text-title-red"
																						>
																							{'>> '}
																							{GetMenuTitleByLocale(item.title, locale)}
																						</CustomLink>
																					</li>
																				))}
																			</ul>
																		</div>
																	</div>
																</div>
															</div>
														</Popover.Panel>
													</Transition>
												</>
											)}
										</Popover>
									))}
								</div>
							</Popover.Group>
						</div>

						<div className="flex items-center lg:ml-auto">
							<div className="hidden lg:ml-8 lg:flex">
								<a href="#" className="flex items-center text-gray-700 hover:text-gray-800">
									<Language />
									<span className="sr-only">, change currency</span>
								</a>
							</div>

							{/* Search */}
							<div className="flex lg:ml-6">
								{showSearch && (
									<div className="rounded-[20px] bg-gradient-to-r from-violet-500 to-fuchsia-500 p-[1px]">
										<InputBase
											onKeyDown={(e) => {
												if (e.code == 'Enter') {
													router.push(
														searchValue.trim()
															? '/search?s=' + encodeURIComponent(searchValue.trim())
															: '/search'
													);
													revalidatePath('/');
												}
											}}
											placeholder="Enter to search..."
											className="rounded-[20px] border-none outline-none"
											onChange={(e) => {
												setSearchValue(e.target.value);
											}}
											autoFocus={true}
										/>
									</div>
								)}
								<div className="cursor-pointer p-2  hover:text-gray-500">
									<span className="sr-only">Search</span>
									<MagnifyingGlassIcon
										className="h-6 w-6"
										aria-hidden="true"
										onClick={handleShowSearch}
									/>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</header>
			<ButtonScrollTop />
		</div>
	);
}
