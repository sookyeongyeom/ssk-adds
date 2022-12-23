import { ReactElement } from 'react';
import CustomHead from '../../../components/Seo/CustomHead';
import { Seo } from '../../../constants/seo';
import { useRouter } from 'next/router';
import AdminLayout from '../../../components/Layout/AdminLayout';
import PublicationViewPage from '../../../components/Admin/Publication/PublicationViewPage';

export default function view() {
	const router = useRouter();
	const id = router.query.id;

	return (
		<>
			<CustomHead title={Seo.Title.publication} />
			<PublicationViewPage id={Number(id)} />
		</>
	);
}

view.getLayout = function getLayout(page: ReactElement) {
	return <AdminLayout>{page}</AdminLayout>;
};
