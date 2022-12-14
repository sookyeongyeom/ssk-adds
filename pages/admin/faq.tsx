import FAQPage from '../../components/Admin/FAQ/FAQPage';
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
