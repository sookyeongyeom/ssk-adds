import { ReactElement } from 'react';
import ContactPage from '../../components/Adds/Contact/ContactPage';
import AddsLayout from '../../components/Layout/AddsLayout';
import HomeLayout from '../../components/Layout/HomeLayout';
import CustomHead from '../../components/Seo/CustomHead';
import { Seo } from '../../constants/seo';

export default function contact() {
	return (
		<>
			<CustomHead title={Seo.Title.contact} />
			<ContactPage />
		</>
	);
}

contact.getLayout = function getLayout(page: ReactElement) {
	return (
		<HomeLayout>
			<AddsLayout>{page}</AddsLayout>
		</HomeLayout>
	);
};
