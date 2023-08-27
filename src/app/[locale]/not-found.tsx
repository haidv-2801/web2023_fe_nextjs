'use client';
import NotFound from '@/src/components/features/notFound/NotFound';
import React from 'react';

type Props = {};
const NotFoundPage = (props: Props) => {
	return <NotFound />;
};

export default NotFoundPage;

export const fetchCache = 'force-no-store',
	dynamic = 'force-dynamic',
	dynamicParams = false;
