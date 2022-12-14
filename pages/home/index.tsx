import HomePage from '../../components/Home/HomePage';
import CustomHead from '../../components/Seo/CustomHead';
import { Seo } from '../../constants/seo';

export default function index() {
	return (
		<>
			<CustomHead title={Seo.Title.home} />
			<HomePage />
		</>
	);
}
