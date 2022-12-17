import { ReactElement } from 'react';
import AddsLayout from '../../../components/Layout/AddsLayout';
import HomeLayout from '../../../components/Layout/HomeLayout';
import CustomHead from '../../../components/Seo/CustomHead';
import { Seo } from '../../../constants/seo';
import ResourceViewPage from '../../../components/Adds/Resource/ResourceViewPage';
import { useRouter } from 'next/router';

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
	return (
		<HomeLayout>
			<AddsLayout>{page}</AddsLayout>
		</HomeLayout>
	);
};
