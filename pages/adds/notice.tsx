import NoticePage from '../../components/Adds/Notice.tsx/NoticePage';
import CustomHead from '../../components/Seo/CustomHead';

export default function notice() {
	return (
		<>
			<CustomHead title={'공지사항'} />
			<NoticePage />
		</>
	);
}
