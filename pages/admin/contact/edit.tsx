import { ReactElement } from 'react';
import ContactEditPage from '../../../components/Admin/Contact/ContactEditPage';
import AdminLayout from '../../../components/Layout/AdminLayout';
import CustomHead from '../../../components/Seo/CustomHead';
import { Seo } from '../../../constants/seo';

export default function edit() {
	return (
		<>
			<CustomHead title={Seo.Title.contact} />
			<ContactEditPage />
		</>
	);
}

edit.getLayout = function getLayout(page: ReactElement) {
	return <AdminLayout>{page}</AdminLayout>;
};
