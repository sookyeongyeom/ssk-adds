import { ReactElement } from 'react';
import FAQPage from '../../components/Adds/FAQ/FAQPage';
import AddsLayout from '../../components/Layout/AddsLayout';
import HomeLayout from '../../components/Layout/HomeLayout';
import CustomHead from '../../components/Seo/CustomHead';
import { Seo } from '../../constants/seo';

export default function faq() {
	return (
		<>
			<CustomHead title={Seo.Title.faq} />
			<FAQPage />
		</>
	);
}

faq.getLayout = function getLayout(page: ReactElement) {
	return (
		<HomeLayout>
			<AddsLayout>{page}</AddsLayout>
		</HomeLayout>
	);
};
