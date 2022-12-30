import { ReactElement } from 'react';
import AdminLayout from '../../../components/Layout/AdminLayout';
import PublicationNewPage from '../../../components/Admin/Publication/PublicationNewPage';
import CustomHead from '../../../components/Seo/CustomHead';
import { Seo } from '../../../constants/seo';

export default function newPage() {
	return (
		<>
			<CustomHead title={Seo.Title.publication} isAdmin />
			<PublicationNewPage />
		</>
	);
}

newPage.getLayout = function getLayout(page: ReactElement) {
	return <AdminLayout>{page}</AdminLayout>;
};
