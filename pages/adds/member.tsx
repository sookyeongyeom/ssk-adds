import MemberPage from '../../components/Adds/Member/MemberPage';
import CustomHead from '../../components/Seo/CustomHead';

export default function member() {
	return (
		<>
			<CustomHead title={'연구진 소개'} />
			<MemberPage />
		</>
	);
}
