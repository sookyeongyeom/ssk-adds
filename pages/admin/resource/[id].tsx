import { ReactElement } from 'react';
import CustomHead from '../../../components/Seo/CustomHead';
import { Seo } from '../../../constants/seo';
import ResourceViewPage from '../../../components/Admin/Resource/ResourceViewPage';
import { useRouter } from 'next/router';
import AdminLayout from '../../../components/Layout/AdminLayout';

export default function resourceView() {
	const router = useRouter();
	const id = router.query.id;

	return (
		<>
			<CustomHead title={Seo.Title.resource} />
			<ResourceViewPage id={Number(id)} />
		</>
	);
}

resourceView.getLayout = function getLayout(page: ReactElement) {
	return <AdminLayout>{page}</AdminLayout>;
};
