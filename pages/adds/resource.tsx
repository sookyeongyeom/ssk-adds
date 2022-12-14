import { ReactElement } from 'react';
import ResourcePage from '../../components/Adds/Resource/ResourcePage';
import AddsLayout from '../../components/Layout/AddsLayout';
import HomeLayout from '../../components/Layout/HomeLayout';
import CustomHead from '../../components/Seo/CustomHead';
import { Seo } from '../../constants/seo';

export default function resource() {
	return (
		<>
			<CustomHead title={Seo.Title.resource} />
			<ResourcePage />
		</>
	);
}

resource.getLayout = function getLayout(page: ReactElement) {
	return (
		<HomeLayout>
			<AddsLayout>{page}</AddsLayout>
		</HomeLayout>
	);
};
