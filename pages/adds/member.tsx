import MemberPage from '../../components/Adds/Member/MemberPage';
import CustomHead from '../../components/Seo/CustomHead';
import { Seo } from '../../constants/seo';

export default function member() {
	return (
		<>
			<CustomHead title={Seo.Title.member} />
			<MemberPage />
		</>
	);
}
