import { ReactElement } from 'react';
import AdminLayout from '../../../components/Layout/AdminLayout';
import FAQNewPage from '../../../components/Admin/FAQ/FAQNewPage';

export default function newPage() {
	return <FAQNewPage />;
}

newPage.getLayout = function getLayout(page: ReactElement) {
	return <AdminLayout>{page}</AdminLayout>;
};
