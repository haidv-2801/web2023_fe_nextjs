import { LocaleCode } from '../commons/types';

export const fallbackLng: LocaleCode = 'vi';
export const languages: LocaleCode[] = [fallbackLng, 'en'];
export const defaultNS = 'translation';

export function getOptions(lng = fallbackLng, ns = defaultNS) {
	return {
		// debug: true,
		supportedLngs: languages,
		fallbackLng,
		lng,
		fallbackNS: defaultNS,
		defaultNS,
		ns,
	};
}
