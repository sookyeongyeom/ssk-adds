import PaperPage from '../../components/Adds/Paper/PaperPage';
import CustomHead from '../../components/Seo/CustomHead';
import { Seo } from '../../constants/seo';

export default function paper() {
	return (
		<>
			<CustomHead title={Seo.Title.paper} />
			<PaperPage />
		</>
	);
}
