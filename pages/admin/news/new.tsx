import { ReactElement } from 'react';
import AdminLayout from '../../../components/Layout/AdminLayout';
import NewsNewPage from '../../../components/Admin/News/NewsNewPage';

export default function newPage() {
	return <NewsNewPage />;
}

newPage.getLayout = function getLayout(page: ReactElement) {
	return <AdminLayout>{page}</AdminLayout>;
};
