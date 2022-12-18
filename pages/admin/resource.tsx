import { ReactElement } from 'react';
import ResourcePage from '../../components/Admin/Resource/ResourcePage';
import AdminLayout from '../../components/Layout/AdminLayout';
import CustomHead from '../../components/Seo/CustomHead';
import { Seo } from '../../constants/seo';

export default function resource() {
	return (
		<>
			<CustomHead title={Seo.Title.resource} isAdmin />
			<ResourcePage />
		</>
	);
}

resource.getLayout = function getLayout(page: ReactElement) {
	return <AdminLayout>{page}</AdminLayout>;
};
