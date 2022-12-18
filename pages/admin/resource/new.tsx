import { ReactElement } from 'react';
import AdminLayout from '../../../components/Layout/AdminLayout';
import ResourceNewPage from '../../../components/Admin/Resource/ResourceNewPage';

export default function newPage() {
	return <ResourceNewPage />;
}

newPage.getLayout = function getLayout(page: ReactElement) {
	return <AdminLayout>{page}</AdminLayout>;
};
