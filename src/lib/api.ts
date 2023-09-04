import { ServiceResponse } from '../commons/types';

export const getHeaders = () => {
	const headers = {
		'Content-Type': 'application/json',
		Authorization: 'Bearer ' + process.env.API_TOKEN_READ_ONLY,
	};
	return headers;
};

export const getHeadersClient = () => {
	const headers = {
		'Content-Type': 'application/json',
		Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_API_TOKEN_READ_ONLY,
	};
	return headers;
};

export const getFullUrl = (path: string) => {
	return `${process.env.NEXT_PUBLIC_URL}/api${path}`;
};

export const getFullUrlClient = (path: string) => {
	return `${process.env.NEXT_PUBLIC_URL_IMAGE}/api${path}`;
};

export const fetcher = async (path: string, option: any = null): Promise<ServiceResponse> => {
	try {
		const headers = getHeaders(),
			url = getFullUrl(path);

		const response = await fetch(url, {
			headers,
			...(option ?? {}),
		});

		const data = await response.json();
		const error = Boolean(data.error);
		console.log('2323 :>> ', JSON.stringify(url));
		return {
			IsSuccess: !error,
			Data: data,
			Code: error ? data.error.status : 200,
		};
	} catch (error) {
		return {
			IsSuccess: false,
			Code: 400,
			Data: error,
		};
	}
};
