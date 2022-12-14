import { ReactElement } from 'react';
import PaperPage from '../../components/Adds/Paper/PaperPage';
import AddsLayout from '../../components/Layout/AddsLayout';
import HomeLayout from '../../components/Layout/HomeLayout';
import CustomHead from '../../components/Seo/CustomHead';
import { Seo } from '../../constants/seo';

export default function paper() {
	return (
		<>
			<CustomHead title={Seo.Title.paper} />
			<PaperPage />
		</>
	);
}

paper.getLayout = function getLayout(page: ReactElement) {
	return (
		<HomeLayout>
			<AddsLayout>{page}</AddsLayout>
		</HomeLayout>
	);
};
