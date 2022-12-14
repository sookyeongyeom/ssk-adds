import ContactPage from '../../components/Admin/Contact/ContactPage';
import CustomHead from '../../components/Seo/CustomHead';
import { Seo } from '../../constants/seo';

export default function contact() {
	return (
		<>
			<CustomHead title={Seo.Title.contact} isAdmin />
			<ContactPage />
		</>
	);
}
