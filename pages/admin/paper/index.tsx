import { ReactElement } from 'react';
import AdminLayout from '../../../components/Layout/AdminLayout';
import CustomHead from '../../../components/Seo/CustomHead';
import { Seo } from '../../../constants/seo';
import PaperPage from '../../../components/Admin/Paper/PaperPage';

export default function index() {
	return (
		<>
			<CustomHead title={Seo.Title.paper} isAdmin />
			<PaperPage />
		</>
	);
}

index.getLayout = function getLayout(page: ReactElement) {
	return <AdminLayout>{page}</AdminLayout>;
};
