import { ReactElement } from 'react';
import AdminLayout from '../../../components/Layout/AdminLayout';
import NewsNewPage from '../../../components/Admin/News/NewsNewPage';
import CustomHead from '../../../components/Seo/CustomHead';
import { Seo } from '../../../constants/seo';

export default function newPage() {
	return (
		<>
			<CustomHead title={Seo.Title.news} isAdmin />
			<NewsNewPage />
		</>
	);
}

newPage.getLayout = function getLayout(page: ReactElement) {
	return <AdminLayout>{page}</AdminLayout>;
};
