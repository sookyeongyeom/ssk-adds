import { ReactElement } from 'react';
import AdminLayout from '../../../components/Layout/AdminLayout';
import CustomHead from '../../../components/Seo/CustomHead';
import { Seo } from '../../../constants/seo';
import FAQPage from '../../../components/Admin/FAQ/FAQPage';

export default function index() {
	return (
		<>
			<CustomHead title={Seo.Title.faq} isAdmin />
			<FAQPage />
		</>
	);
}

index.getLayout = function getLayout(page: ReactElement) {
	return <AdminLayout>{page}</AdminLayout>;
};
