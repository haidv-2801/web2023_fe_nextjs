import AboutMeView from '@/src/components/features/aboutMe/AboutMeView/AboutMeView';
import Main from '@/src/layouts/main/Main';

type Props = {
	params: {
		locale: string;
	};
};

export async function generateMetadata({ params }: Props) {
	const { locale } = params;

	return {
		title: locale == 'vi' ? 'Giới thiệu' : 'About',
	};
}

export default async function ClientPage({ params: { locale } }: Props) {
	return (
		<Main>
			<AboutMeView params={{ locale: locale }} />
		</Main>
	);
}
