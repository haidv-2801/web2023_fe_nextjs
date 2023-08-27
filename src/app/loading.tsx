'use client';

import Image from 'next/image';
import LogoVietcom from '/public/assets/images/logo-vietcom.png';
import { twMerge } from 'tailwind-merge';
import LoadingClient from '../components/features/loading/Loading';

const Loading = async () => {
	return <LoadingClient />;
};

export default Loading;
