import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import localeEn from 'dayjs/locale/en';
import localeVi from 'dayjs/locale/vi';

dayjs.extend(localizedFormat);
dayjs.locale(localeVi);

export const formatDDMMYYYY = (date: any) => {
	try {
		return dayjs(date).format('L hh:mm A');
	} catch (error) {
		return '';
	}
};

export default dayjs;
