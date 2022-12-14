import { ReactElement } from 'react';
import NewsPage from '../../components/Adds/News/NewsPage';
import AddsLayout from '../../components/Layout/AddsLayout';
import HomeLayout from '../../components/Layout/HomeLayout';
import CustomHead from '../../components/Seo/CustomHead';
import { Seo } from '../../constants/seo';

export default function news() {
	return (
		<>
			<CustomHead title={Seo.Title.news} />
			<NewsPage />
		</>
	);
}

news.getLayout = function getLayout(page: ReactElement) {
	return (
		<HomeLayout>
			<AddsLayout>{page}</AddsLayout>
		</HomeLayout>
	);
};
