import { ReactElement } from 'react';
import PublicationPage from '../../components/Admin/Publication/PublicationPage';
import AdminLayout from '../../components/Layout/AdminLayout';
import CustomHead from '../../components/Seo/CustomHead';
import { Seo } from '../../constants/seo';

export default function publication() {
	return (
		<>
			<CustomHead title={Seo.Title.publication} isAdmin />
			<PublicationPage />
		</>
	);
}

publication.getLayout = function getLayout(page: ReactElement) {
	return <AdminLayout>{page}</AdminLayout>;
};
