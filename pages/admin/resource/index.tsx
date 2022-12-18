import { ReactElement } from 'react';
import ResourcePage from '../../../components/Admin/Resource/ResourcePage';
import AdminLayout from '../../../components/Layout/AdminLayout';
import CustomHead from '../../../components/Seo/CustomHead';
import { Seo } from '../../../constants/seo';

export default function index() {
	return (
		<>
			<CustomHead title={Seo.Title.resource} isAdmin />
			<ResourcePage />
		</>
	);
}

index.getLayout = function getLayout(page: ReactElement) {
	return <AdminLayout>{page}</AdminLayout>;
};
