import { ReactElement } from 'react';
import AdminLayout from '../../../components/Layout/AdminLayout';
import NoticeNewPage from '../../../components/Admin/Notice/NoticeNewPage';
import CustomHead from '../../../components/Seo/CustomHead';
import { Seo } from '../../../constants/seo';

export default function newPage() {
	return (
		<>
			<CustomHead title={Seo.Title.notice} isAdmin />
			<NoticeNewPage />
		</>
	);
}

newPage.getLayout = function getLayout(page: ReactElement) {
	return <AdminLayout>{page}</AdminLayout>;
};
