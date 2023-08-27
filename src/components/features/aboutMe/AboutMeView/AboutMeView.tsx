import Input from '@/src/components/base/Input/Input';
import { useTranslation } from '@/src/i18n/server';
import React from 'react';

type Props = {
	params: {
		locale: string;
	};
};

const AboutMeView = async ({ params }: Props) => {
	const { locale } = params;
	const [{ t }] = await Promise.all([useTranslation(locale)]);

	return (
		<div className="flex flex-col gap-6">
			<h1 className="text-center text-[2rem] font-bold text-title-red md:my-6">
				{t('aboutMeView.companyName')}
			</h1>
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
				<div className="flex-1 rounded-2xl border-main-border">
					<div className="flex h-full flex-col py-4 sm:p-6">
						<h1 className="mb-4 text-2xl font-bold text-title-red">LỊCH SỬ HÌNH THÀNH</h1>
						<p className="leading-6">
							Công ty TNHH Việt Com được thành lập từ năm 2003 tại Hà Nội, với gần 20 năm kinh
							nghiệm trong lĩnh vực cơ điện bệnh viện. Chúng tôi có nhiều năm kinh nghiệm trong thi
							công, cung cấp các dịch vụ tại các bệnh viện lớn như Bệnh viện Bạch Mai, Bệnh viện
							Bệnh Nhiệt đới Trung Ương, Bệnh viện Thanh Nhàn, Bệnh viện Xanh Pôn,.... và các bệnh
							viện tỉnh thành khác. Chúng tôi tự hào khi là đơn vị đầu tiên trong lĩnh vực Hệ thống
							khí y tế và Hệ thống Phòng mổ với tường kính màu.
						</p>
					</div>
				</div>

				<div className="flex-1 rounded-2xl  border-main-border">
					<div className="flex h-full flex-col py-4 sm:p-6">
						<h1 className="mb-4 text-2xl font-bold text-title-red">TẦM NHÌN</h1>
						<p className="leading-6">
							Với chiến lược phát triển bền vững, Công ty TNHH Việt Com là đơn vị chuyên nghiệp
							trong lĩnh vực cơ điện bệnh viện.
						</p>
					</div>
				</div>

				<div className="flex-1 rounded-2xl  border-main-border">
					<div className="flex h-full flex-col py-4 sm:p-6">
						<h1 className="mb-4 text-2xl font-bold text-title-red">SỨ MỆNH</h1>
						<p className="leading-6">
							Công ty TNHH Việt Com cung cấp các giải pháp, sản phẩm hoàn hảo cho tất cả các bệnh
							viện tại Việt Nam và thế giới.
						</p>
					</div>
				</div>

				<div className="h-auto flex-1  rounded-2xl border-main-border">
					<div className="flex h-full flex-col py-4 sm:p-6">
						<h1 className="mb-4 text-2xl font-bold text-title-red">GIÁ TRỊ CỐT LÕI</h1>
						<p className="leading-6">
							Sáng tạo - Trách nhiệm - Quan tâm - Liên tục - Kết nối - Cá nhân.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMeView;
