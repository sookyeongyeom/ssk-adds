import ResearchPage from '../../components/Adds/Research/ResearchPage';
import CustomHead from '../../components/Seo/CustomHead';
import { Seo } from '../../constants/seo';

export default function research() {
	return (
		<>
			<CustomHead title={Seo.Title.research} />
			<ResearchPage />
		</>
	);
}
