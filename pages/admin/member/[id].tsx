import { ReactElement } from 'react';
import CustomHead from '../../../components/Seo/CustomHead';
import { Seo } from '../../../constants/seo';
import { useRouter } from 'next/router';
import AdminLayout from '../../../components/Layout/AdminLayout';
import MemberViewPage from '../../../components/Admin/Member/MemberViewPage';

export default function noticeView() {
	const router = useRouter();
	const id = router.query.id;

	return (
		<>
			<CustomHead title={Seo.Title.member} />
			<MemberViewPage id={Number(id)} />
		</>
	);
}

noticeView.getLayout = function getLayout(page: ReactElement) {
	return <AdminLayout>{page}</AdminLayout>;
};
