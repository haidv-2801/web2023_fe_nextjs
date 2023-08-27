import ContactMeView from '@/src/components/features/contact/ContactMeView/ContactMeView';
import Main from '@/src/layouts/main/Main';
import { fetchContactMe } from './service';
import { LocaleCode } from '@/src/commons/types';

type Props = {
	params: {
		locale: string;
	};
};

export default async function ClientPage({ params: { locale } }: Props) {
	const data = await fetchContactMe(locale as LocaleCode);
	return (
		<Main>
			<ContactMeView contactMe={data} params={{ locale: locale }} />
		</Main>
	);
}
