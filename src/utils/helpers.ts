import slugify from 'slugify';
import { LocaleCode } from '../commons/types';

export const Slugify = (data: string): string => {
	return slugify(data, {
		replacement: '-', // replace spaces with replacement character, defaults to `-`
		remove: undefined, // remove characters that match regex, defaults to `undefined`
		lower: false, // convert to lower case, defaults to `false`
		strict: false, // strip special characters except replacement, defaults to `false`
		locale: 'vi', // language code of the locale to use
		trim: true, // trim leading and trailing replacement chars, defaults to `true`
	});
};

export const ClassNames = (...classes: string[]): string => {
	return classes.filter(Boolean).join(' ');
};

export const FormatSeoTitle = (title?: any, locale?: LocaleCode) => {
	return `${title || ''}` + '| VietcomLtd - ' + locale == 'vi'
		? 'Giải Pháp Y Tế'
		: 'Medical Solutions';
};

export const GetImageUrl = (path: string): string => {
	if (!path) return '';
	return `${process.env.NEXT_PUBLIC_URL as string}${path}`;
};

export const GetClientImageUrl = (path: string): string => {
	if (path.startsWith('/upload')) {
		return `${process.env.NEXT_PUBLIC_URL_IMAGE as string}${path}`;
	}
	return path;
};

export const GetMenuTitleByLocale = (title: string, locale: LocaleCode) => {
	const titles = title.split('**');
	if (!titles.length) return '';
	if (titles.length == 1 || locale == 'vi') return titles[0];
	return titles[1];
};

export const transformData = (data: any) => {
	return data['data'].map((f: any) => ({
		id: f.id,
		...f.attributes,
		image: f.attributes?.image?.data?.attributes?.formats?.medium,
	}));
};
