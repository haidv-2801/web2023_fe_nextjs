import AboutMeView from '@/src/components/features/aboutMe/AboutMeView/AboutMeView';
import Main from '@/src/layouts/main/Main';

type Props = {
	params: {
		locale: string;
	};
};

export default async function ClientPage({ params: { locale } }: Props) {
	return (
		<Main>
			<AboutMeView params={{ locale: locale }} />
		</Main>
	);
}
