import { ReactElement } from 'react';
import AdminLayout from '../../../components/Layout/AdminLayout';
import CustomHead from '../../../components/Seo/CustomHead';
import { Seo } from '../../../constants/seo';
import MemberPage from '../../../components/Admin/Member/MemberPage';

export default function index() {
	return (
		<>
			<CustomHead title={Seo.Title.member} isAdmin />
			<MemberPage />
		</>
	);
}

index.getLayout = function getLayout(page: ReactElement) {
	return <AdminLayout>{page}</AdminLayout>;
};
