import { ReactElement } from 'react';
import MemberPage from '../../components/Admin/Member/MemberPage';
import AdminLayout from '../../components/Layout/AdminLayout';
import CustomHead from '../../components/Seo/CustomHead';
import { Seo } from '../../constants/seo';

export default function member() {
	return (
		<>
			<CustomHead title={Seo.Title.member} isAdmin />
			<MemberPage />
		</>
	);
}

member.getLayout = function getLayout(page: ReactElement) {
	return <AdminLayout>{page}</AdminLayout>;
};
