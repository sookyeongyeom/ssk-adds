import IntroPage from '../../components/Adds/Intro/IntroPage';
import CustomHead from '../../components/Seo/CustomHead';
import { Seo } from '../../constants/seo';

export default function intro() {
	return (
		<>
			<CustomHead title={Seo.Title.intro} />
			<IntroPage />
		</>
	);
}
