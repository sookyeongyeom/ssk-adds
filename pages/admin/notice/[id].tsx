import { ReactElement } from 'react';
import CustomHead from '../../../components/Seo/CustomHead';
import { Seo } from '../../../constants/seo';
import { useRouter } from 'next/router';
import NoticeViewPage from '../../../components/Admin/Notice/NoticeViewPage';
import AdminLayout from '../../../components/Layout/AdminLayout';

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
	return <AdminLayout>{page}</AdminLayout>;
};
