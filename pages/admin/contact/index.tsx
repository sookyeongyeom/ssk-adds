import { ReactElement } from 'react';
import CustomHead from '../../../components/Seo/CustomHead';
import { Seo } from '../../../constants/seo';
import AdminLayout from '../../../components/Layout/AdminLayout';
import ContactViewPage from '../../../components/Admin/Contact/ContactViewPage';

export default function index() {
	return (
		<>
			<CustomHead title={Seo.Title.contact} />
			<ContactViewPage />
		</>
	);
}

index.getLayout = function getLayout(page: ReactElement) {
	return <AdminLayout>{page}</AdminLayout>;
};
