import { ReactElement } from 'react';
import AdminLayout from '../../../components/Layout/AdminLayout';
import CustomHead from '../../../components/Seo/CustomHead';
import { Seo } from '../../../constants/seo';
import NewsPage from '../../../components/Admin/News/NewsPage';

export default function index() {
	return (
		<>
			<CustomHead title={Seo.Title.news} isAdmin />
			<NewsPage />
		</>
	);
}

index.getLayout = function getLayout(page: ReactElement) {
	return <AdminLayout>{page}</AdminLayout>;
};
