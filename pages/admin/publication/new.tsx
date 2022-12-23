import { ReactElement } from 'react';
import AdminLayout from '../../../components/Layout/AdminLayout';
import PublicationNewPage from '../../../components/Admin/Publication/PublicationNewPage';

export default function newPage() {
	return <PublicationNewPage />;
}

newPage.getLayout = function getLayout(page: ReactElement) {
	return <AdminLayout>{page}</AdminLayout>;
};
