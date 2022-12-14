import NoticePage from '../../components/Admin/Notice/NoticePage';
import CustomHead from '../../components/Seo/CustomHead';
import { Seo } from '../../constants/seo';

export default function notice() {
	return (
		<>
			<CustomHead title={Seo.Title.notice} isAdmin />
			<NoticePage />
		</>
	);
}
