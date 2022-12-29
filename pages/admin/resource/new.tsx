import { ReactElement } from 'react';
import AdminLayout from '../../../components/Layout/AdminLayout';
import ResourceNewPage from '../../../components/Admin/Resource/ResourceNewPage';
import CustomHead from '../../../components/Seo/CustomHead';
import { Seo } from '../../../constants/seo';

export default function newPage() {
	return (
		<>
			<CustomHead title={Seo.Title.resource} isAdmin />
			<ResourceNewPage />
		</>
	);
}

newPage.getLayout = function getLayout(page: ReactElement) {
	return <AdminLayout>{page}</AdminLayout>;
};
