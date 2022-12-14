import HomePage from '../../components/Home/HomePage';
import CustomHead from '../../components/Seo/CustomHead';

export default function index() {
	return (
		<>
			<CustomHead title={'Home'} />
			<HomePage />
		</>
	);
}
