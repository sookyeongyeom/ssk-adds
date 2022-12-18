import ContactPage from '../../components/Admin/Contact/ContactPage';
import CustomHead from '../../components/Seo/CustomHead';
import { Seo } from '../../constants/seo';
import AdminLayout from '../../components/Layout/AdminLayout';
import { ReactElement } from 'react';

export default function contact() {
	return (
		<>
			<CustomHead title={Seo.Title.contact} isAdmin />
			<ContactPage />
		</>
	);
}

contact.getLayout = function getLayout(page: ReactElement) {
	return <AdminLayout>{page}</AdminLayout>;
};
