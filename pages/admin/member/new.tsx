import { ReactElement } from 'react';
import AdminLayout from '../../../components/Layout/AdminLayout';
import MemberNewPage from '../../../components/Admin/Member/MemberNewPage';

export default function newPage() {
	return <MemberNewPage />;
}

newPage.getLayout = function getLayout(page: ReactElement) {
	return <AdminLayout>{page}</AdminLayout>;
};
