import { ReactElement } from 'react';
import AddsLayout from '../../../components/Layout/AddsLayout';
import HomeLayout from '../../../components/Layout/HomeLayout';
import CustomHead from '../../../components/Seo/CustomHead';
import { Seo } from '../../../constants/seo';
import { useRouter } from 'next/router';
import NoticeViewPage from '../../../components/Adds/Notice/NoticeViewPage';

export default function noticeView() {
	const router = useRouter();
	const id = router.query.id;

	return (
		<>
			<CustomHead title={Seo.Title.notice} />
			<NoticeViewPage id={Number(id)} />
		</>
	);
}

noticeView.getLayout = function getLayout(page: ReactElement) {
	return (
		<HomeLayout>
			<AddsLayout>{page}</AddsLayout>
		</HomeLayout>
	);
};
