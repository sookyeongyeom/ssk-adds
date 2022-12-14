import { ReactElement } from 'react';
import PublicationPage from '../../components/Adds/Publication/PublicationPage';
import AddsLayout from '../../components/Layout/AddsLayout';
import HomeLayout from '../../components/Layout/HomeLayout';
import CustomHead from '../../components/Seo/CustomHead';
import { Seo } from '../../constants/seo';

export default function publication() {
	return (
		<>
			<CustomHead title={Seo.Title.publication} />
			<PublicationPage />
		</>
	);
}

publication.getLayout = function getLayout(page: ReactElement) {
	return (
		<HomeLayout>
			<AddsLayout>{page}</AddsLayout>
		</HomeLayout>
	);
};
