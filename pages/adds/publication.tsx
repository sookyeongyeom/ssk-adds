import PublicationPage from '../../components/Adds/Publication/PublicationPage';
import CustomHead from '../../components/Seo/CustomHead';
import { Seo } from '../../constants/seo';

export default function publication() {
	return (
		<>
			<CustomHead title={Seo.Title.publication} />
			<PublicationPage />
		</>
	);
}
