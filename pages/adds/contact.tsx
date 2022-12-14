import ContactPage from '../../components/Adds/Contact/ContactPage';
import CustomHead from '../../components/Seo/CustomHead';
import { Seo } from '../../constants/seo';

export default function contact() {
	return (
		<>
			<CustomHead title={Seo.Title.contact} />
			<ContactPage />
		</>
	);
}
