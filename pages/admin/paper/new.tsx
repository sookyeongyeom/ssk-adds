import { ReactElement } from 'react';
import AdminLayout from '../../../components/Layout/AdminLayout';
import PaperNewPage from '../../../components/Admin/Paper/PaperNewPage';

export default function newPage() {
	return <PaperNewPage />;
}

newPage.getLayout = function getLayout(page: ReactElement) {
	return <AdminLayout>{page}</AdminLayout>;
};
