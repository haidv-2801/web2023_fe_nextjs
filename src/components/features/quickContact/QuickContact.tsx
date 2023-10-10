'use client';
import { useSubmitMessage } from '@/src/hooks/useSubmitMessage';
import { useTranslation } from '@/src/i18n/client';
import { useLocale } from '@/src/providers/LocaleProvider';
import { useState } from 'react';
import Button from '../../base/Button/Button';
import Image from '../../base/Image/Image';
import InputBase from '../../base/InputBase/InputBase';
import OutBoxImage from '/public/assets/images/outbox.png';

const QuickContact = () => {
	const { locale } = useLocale();
	const { t } = useTranslation(locale);
	const [message, setMessage] = useState<string>('');

	const { onSubmit: handleSubmitForm } = useSubmitMessage();

	const onSubmit = async () => {
		if (!message.trim()) {
			alert('Bạn chưa nhập thông tin!');
			return;
		}
		handleSubmitForm({
			name: '',
			email: '',
			phone_number: '',
			message: message,
		});
		alert('Gửi thông tin tư vấn thành công!!!');
		setMessage('');
	};

	return (
		<div className="flex w-full flex-col items-center justify-center gap-6 bg-title-red px-6 py-6 text-white sm:h-[178px] sm:flex-row sm:justify-between">
			<div className="left">
				<div className="flex gap-6">
					<div className="flex-shrink-0">
						<Image lazyBlur={false} src={OutBoxImage.src} width={55} height={55} alt="Outbox" />
					</div>
					<div className="">
						<div className="text-xl font-semibold">{t('home.submitReceived')}</div>
						<div className="text-sm">{t('home.text1')}</div>
					</div>
				</div>
			</div>
			<div className="right flex items-center gap-0">
				<InputBase
					className="h-[52px] min-w-[30vw] rounded-none"
					placeholder="Enter email or phone..."
					onChange={(e) => setMessage(e.target.value)}
					onKeyDown={(e) => {
						if (e.key == 'Enter') {
							onSubmit();
						}
					}}
				/>
				<Button
					className="whitespace-nowrap rounded-none bg-[#002155] px-6 py-4"
					onClick={onSubmit}
				>
					{t('home.sent')}
				</Button>
			</div>
		</div>
	);
};

export default QuickContact;
