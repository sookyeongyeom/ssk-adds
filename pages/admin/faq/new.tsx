import { ReactElement } from 'react';
import AdminLayout from '../../../components/Layout/AdminLayout';
import FAQNewPage from '../../../components/Admin/FAQ/FAQNewPage';
import CustomHead from '../../../components/Seo/CustomHead';
import { Seo } from '../../../constants/seo';

export default function newPage() {
	return (
		<>
			<CustomHead title={Seo.Title.faq} isAdmin />
			<FAQNewPage />
		</>
	);
}

newPage.getLayout = function getLayout(page: ReactElement) {
	return <AdminLayout>{page}</AdminLayout>;
};
