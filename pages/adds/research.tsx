import { ReactElement } from 'react';
import ResearchPage from '../../components/Adds/Research/ResearchPage';
import AddsLayout from '../../components/Layout/AddsLayout';
import HomeLayout from '../../components/Layout/HomeLayout';
import CustomHead from '../../components/Seo/CustomHead';
import { Seo } from '../../constants/seo';

export default function research() {
	return (
		<>
			<CustomHead title={Seo.Title.research} />
			<ResearchPage />
		</>
	);
}

research.getLayout = function getLayout(page: ReactElement) {
	return (
		<HomeLayout>
			<AddsLayout>{page}</AddsLayout>
		</HomeLayout>
	);
};
