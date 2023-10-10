import { getFullUrlClient, getHeadersClient } from '../lib/api';

export const useSubmitMessage = () => {
	const onSubmit = async (data: any) => {
		const body = {
			data,
		};
		const headers = getHeadersClient(),
			url = getFullUrlClient('/messages');
		await fetch(url, {
			method: 'POST',
			headers,
			body: JSON.stringify(body),
		});
	};

	return {
		onSubmit,
	};
};
