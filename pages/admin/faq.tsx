import { ReactElement } from 'react';
import FAQPage from '../../components/Admin/FAQ/FAQPage';
import AdminLayout from '../../components/Layout/AdminLayout';
import CustomHead from '../../components/Seo/CustomHead';
import { Seo } from '../../constants/seo';

export default function faq() {
	return (
		<>
			<CustomHead title={Seo.Title.faq} isAdmin />
			<FAQPage />
		</>
	);
}

faq.getLayout = function getLayout(page: ReactElement) {
	return <AdminLayout>{page}</AdminLayout>;
};
