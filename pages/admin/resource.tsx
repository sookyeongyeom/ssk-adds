import ResourcePage from '../../components/Admin/Resource/ResourcePage';
import CustomHead from '../../components/Seo/CustomHead';
import { Seo } from '../../constants/seo';

export default function resource() {
	return (
		<>
			<CustomHead title={Seo.Title.resource} isAdmin />
			<ResourcePage />
		</>
	);
}
