'use client';
import { ContactMe } from '@/src/commons/types';
import Button from '@/src/components/base/Button/Button';
import ButtonLink from '@/src/components/base/Button/ButtonLink';
import Input from '@/src/components/base/Input/Input';
import TextArea from '@/src/components/base/TextArea/TextArea';
import IconInbox from '@/src/components/icons/IconInbox';
import IconInternet from '@/src/components/icons/IconInternet';
import IconPhone from '@/src/components/icons/IconPhone';
import { useSubmitMessage } from '@/src/hooks/useSubmitMessage';
import { useTranslation } from '@/src/i18n/client';
import { getFullUrlClient, getHeadersClient } from '@/src/lib/api';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

type Props = {
	params: {
		locale: string;
	};
	contactMe: ContactMe | null;
};

const ContactMeView = (props: Props) => {
	const { contactMe } = props;
	const inputBlur = 'bg-colorBlur focus:bg-white';
	const { t } = useTranslation(props.params.locale);
	const [message, setMessage] = useState<string>('');

	const methods = useForm();
	const {
		handleSubmit,
		formState: { isValid, errors },
		register,
		reset,
	} = methods;

	const { onSubmit: handleSubmitForm } = useSubmitMessage();

	const onSubmit = async (data: any) => {
		handleSubmitForm({
			name: `${data.firstName} ${data.lastName}`,
			email: data.email,
			phone_number: data.phoneNumber,
			message: message,
		});
		afterSubmit();
	};

	const afterSubmit = () => {
		alert('Gửi thông tin tư vấn thành công!!!');
		reset();
		setMessage('');
	};

	if (contactMe == null) {
		return <h1 className="my-4 text-2xl font-bold text-title-red">NO DATA!</h1>;
	}

	return (
		<section className="flex flex-col">
			<div className="mx-auto mb-6 flex flex-col items-center">
				<h1 className="my-4 text-3xl font-bold text-title-red">{contactMe.title}</h1>
				<p className="mx-auto mb-6 max-w-2xl text-center text-[#454545]">{contactMe.content}</p>
			</div>
			<div className="mb-8 flex gap-6">
				<div className="mx-auto flex w-full flex-col gap-4">
					<FormProvider {...methods}>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="mb-4 flex w-full flex-col gap-4 md:flex-row">
								<span className="flex w-full flex-col gap-1">
									<label className="mb-1">{t('contactMeView.firstName')}</label>
									<Input
										placeholder="Họ"
										className={twMerge('w-full flex-1 focus:placeholder:text-[#bbbbbb]', inputBlur)}
										name="firstName"
										label="Họ"
										validate={{ required: false, maxLength: 255, minLength: 0 }}
									/>
								</span>
								<span className="flex w-full  flex-col gap-1">
									<label>{t('contactMeView.lastName')}</label>
									<Input
										placeholder="Tên"
										className={twMerge('flex-1 focus:placeholder:text-[#bbbbbb]', inputBlur)}
										name="lastName"
										label="Tên"
										validate={{ required: false, maxLength: 255, minLength: 0 }}
									/>
								</span>
							</div>
							<div className="mb-4 flex w-full flex-col gap-4 md:flex-row">
								<span className="flex w-full flex-col gap-1">
									<label>
										Email <span className="text-title-red">*</span>
									</label>
									<Input
										placeholder="Email"
										className={twMerge('flex-1 focus:placeholder:text-[#bbbbbb]', inputBlur)}
										name="email"
										label="Email"
										validate={{
											required: true,
											maxLength: 255,
											minLength: 0,
											pattern: /^\S+@\S+$/i,
										}}
									/>
								</span>
								<span className="flex w-full flex-col gap-1">
									<label>
										{t('contactMeView.phone')} <span className="text-title-red">*</span>
									</label>
									<Input
										type="tel"
										placeholder="Số điện thoại"
										className={twMerge('flex-1 focus:placeholder:text-[#bbbbbb]', inputBlur)}
										name="phoneNumber"
										label="Số điện thoại"
										validate={{
											required: true,
											maxLength: 12,
											minLength: 6,
										}}
									/>
								</span>
							</div>
							<div className="flex w-full flex-row">
								<span className="flex w-full flex-col gap-1">
									<label>{t('contactMeView.note')}</label>
									<TextArea
										className={twMerge('min-h-[120px] focus:placeholder:text-[#bbbbbb]', inputBlur)}
										rows={4}
										placeholder="Ghi chú"
										onChange={(e) => {
											setMessage(e.target.value);
										}}
									/>
								</span>
							</div>
							<Button
								type="submit"
								className="mx-auto mt-6 max-w-md bg-primary font-semibold text-white hover:opacity-95 active:bg-[#433cba]"
							>
								{t('contactMeView.sendContact')}
							</Button>
						</form>
					</FormProvider>
					<div className="mt-8 flex w-full flex-col justify-around gap-10 md:flex-row">
						<div className="flex flex-1 flex-col pr-6">
							<div className="mb-6 flex h-11  w-11 flex-row items-center justify-center rounded-lg  bg-[#f3f4f6] md:flex-col">
								<IconPhone className="mx-auto" />
							</div>
							<h2 className="flex flex-col font-bold">
								<ButtonLink className="h-fit w-fit p-0">
									<a href="tel:+84 (243) 771-9534">+84 (243) 771-9534</a>
								</ButtonLink>

								<ButtonLink className="h-fit w-fit p-0">
									<a href="tel:+84 (396) 674-111">+84 (396) 674-111</a>
								</ButtonLink>
							</h2>
						</div>
						<div className="flex flex-1 flex-col pr-6">
							<div className="mb-6 flex h-11 w-11  flex-row items-center justify-center rounded-lg bg-[#f3f4f6]  md:flex-col">
								<IconInbox className="mx-auto" />
							</div>
							<ButtonLink className="h-fit w-fit p-0">
								<a href={`mailto:${contactMe.email}`}>{contactMe.email}</a>
							</ButtonLink>
						</div>
						<div className="flex flex-1 flex-col pr-6">
							<div className="mb-6 flex h-11 w-11  flex-row items-center justify-center rounded-lg bg-[#f3f4f6]  md:flex-col">
								<IconInternet className="mx-auto " />
							</div>
							<h2 className="font-bold">{contactMe.address}</h2>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactMeView;
