import { LocaleCode } from '../commons/types';
import Language from '../components/base/Language/Language';
import Main from '../layouts/main/Main';
import { useTranslation } from '../i18n/server';
import { Metadata } from 'next';

type Props = {
	params: {
		locale: string;
	};
};

const HomePage = async ({ params }: Props) => {
	const { locale } = params;
	const { t } = await useTranslation(locale);
	return <Main>{"Đây là home page"}</Main>;
};

export default HomePage;
