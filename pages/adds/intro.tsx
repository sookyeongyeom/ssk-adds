import { ReactElement } from 'react';
import IntroPage from '../../components/Adds/Intro/IntroPage';
import AddsLayout from '../../components/Layout/AddsLayout';
import HomeLayout from '../../components/Layout/HomeLayout';
import CustomHead from '../../components/Seo/CustomHead';
import { Seo } from '../../constants/seo';

export default function intro() {
	return (
		<>
			<CustomHead title={Seo.Title.intro} />
			<IntroPage />
		</>
	);
}

intro.getLayout = function getLayout(page: ReactElement) {
	return (
		<HomeLayout>
			<AddsLayout>{page}</AddsLayout>
		</HomeLayout>
	);
};
