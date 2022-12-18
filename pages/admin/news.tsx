import { ReactElement } from 'react';
import NewsPage from '../../components/Admin/News/NewsPage';
import AdminLayout from '../../components/Layout/AdminLayout';
import CustomHead from '../../components/Seo/CustomHead';
import { Seo } from '../../constants/seo';

export default function news() {
	return (
		<>
			<CustomHead title={Seo.Title.news} isAdmin />
			<NewsPage />
		</>
	);
}

news.getLayout = function getLayout(page: ReactElement) {
	return <AdminLayout>{page}</AdminLayout>;
};
