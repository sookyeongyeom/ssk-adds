import { ReactElement } from 'react';
import PaperPage from '../../components/Admin/Paper/PaperPage';
import AdminLayout from '../../components/Layout/AdminLayout';
import CustomHead from '../../components/Seo/CustomHead';
import { Seo } from '../../constants/seo';

export default function paper() {
	return (
		<>
			<CustomHead title={Seo.Title.paper} isAdmin />
			<PaperPage />
		</>
	);
}

paper.getLayout = function getLayout(page: ReactElement) {
	return <AdminLayout>{page}</AdminLayout>;
};
