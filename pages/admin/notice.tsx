import { ReactElement } from 'react';
import NoticePage from '../../components/Admin/Notice/NoticePage';
import AdminLayout from '../../components/Layout/AdminLayout';
import CustomHead from '../../components/Seo/CustomHead';
import { Seo } from '../../constants/seo';

export default function notice() {
	return (
		<>
			<CustomHead title={Seo.Title.notice} isAdmin />
			<NoticePage />
		</>
	);
}

notice.getLayout = function getLayout(page: ReactElement) {
	return <AdminLayout>{page}</AdminLayout>;
};
