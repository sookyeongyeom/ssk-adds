import PaperPage from '../../components/Admin/Paper/PaperPage';
import CustomHead from '../../components/Seo/CustomHead';
import { Seo } from '../../constants/seo';

export default function paper() {
	return (
		<>
			<CustomHead title={Seo.Title.paper} isAdmin />
			<PaperPage />
		</>
	);
}
