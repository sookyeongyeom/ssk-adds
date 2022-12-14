import NewsPage from '../../components/Adds/News.tsx/NewsPage';
import CustomHead from '../../components/Seo/CustomHead';

export default function news() {
	return (
		<>
			<CustomHead title={'보도자료'} />
			<NewsPage />
		</>
	);
}
