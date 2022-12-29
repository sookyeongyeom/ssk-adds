import { ReactElement } from 'react';
import AdminLayout from '../../../components/Layout/AdminLayout';
import PaperNewPage from '../../../components/Admin/Paper/PaperNewPage';
import CustomHead from '../../../components/Seo/CustomHead';
import { Seo } from '../../../constants/seo';

export default function newPage() {
	return (
		<>
			<CustomHead title={Seo.Title.paper} isAdmin />
			<PaperNewPage />
		</>
	);
}

newPage.getLayout = function getLayout(page: ReactElement) {
	return <AdminLayout>{page}</AdminLayout>;
};
