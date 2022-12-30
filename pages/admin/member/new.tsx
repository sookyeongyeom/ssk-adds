import { ReactElement } from 'react';
import AdminLayout from '../../../components/Layout/AdminLayout';
import MemberNewPage from '../../../components/Admin/Member/MemberNewPage';
import CustomHead from '../../../components/Seo/CustomHead';
import { Seo } from '../../../constants/seo';

export default function newPage() {
	return (
		<>
			<CustomHead title={Seo.Title.member} isAdmin />
			<MemberNewPage />
		</>
	);
}

newPage.getLayout = function getLayout(page: ReactElement) {
	return <AdminLayout>{page}</AdminLayout>;
};
