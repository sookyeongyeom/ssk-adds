import NewsPage from '../../components/Adds/News/NewsPage';
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
