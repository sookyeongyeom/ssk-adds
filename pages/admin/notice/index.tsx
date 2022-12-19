import { ReactElement } from 'react';
import AdminLayout from '../../../components/Layout/AdminLayout';
import CustomHead from '../../../components/Seo/CustomHead';
import NoticePage from '../../../components/Admin/Notice/NoticePage';
import { Seo } from '../../../constants/seo';

export default function index() {
	return (
		<>
			<CustomHead title={Seo.Title.notice} isAdmin />
			<NoticePage />
		</>
	);
}

index.getLayout = function getLayout(page: ReactElement) {
	return <AdminLayout>{page}</AdminLayout>;
};
