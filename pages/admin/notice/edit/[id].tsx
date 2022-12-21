import { ReactElement } from 'react';
import CustomHead from '../../../../components/Seo/CustomHead';
import { Seo } from '../../../../constants/seo';
import { useRouter } from 'next/router';
import AdminLayout from '../../../../components/Layout/AdminLayout';
import NoticeEditPage from '../../../../components/Admin/Notice/NoticeEditPage';

export default function noticeEdit() {
	const router = useRouter();
	const id = router.query.id;

	return (
		<>
			<CustomHead title={Seo.Title.notice} />
			<NoticeEditPage id={Number(id)} />
		</>
	);
}

noticeEdit.getLayout = function getLayout(page: ReactElement) {
	return <AdminLayout>{page}</AdminLayout>;
};
