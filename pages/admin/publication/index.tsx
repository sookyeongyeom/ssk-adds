import { ReactElement } from 'react';
import AdminLayout from '../../../components/Layout/AdminLayout';
import CustomHead from '../../../components/Seo/CustomHead';
import { Seo } from '../../../constants/seo';
import PublicationPage from '../../../components/Admin/Publication/PublicationPage';

export default function index() {
	return (
		<>
			<CustomHead title={Seo.Title.publication} isAdmin />
			<PublicationPage />
		</>
	);
}

index.getLayout = function getLayout(page: ReactElement) {
	return <AdminLayout>{page}</AdminLayout>;
};
