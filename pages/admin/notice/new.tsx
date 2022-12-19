import { ReactElement } from 'react';
import AdminLayout from '../../../components/Layout/AdminLayout';
import NoticeNewPage from '../../../components/Admin/Notice/NoticeNewPage';

export default function newPage() {
	return <NoticeNewPage />;
}

newPage.getLayout = function getLayout(page: ReactElement) {
	return <AdminLayout>{page}</AdminLayout>;
};
