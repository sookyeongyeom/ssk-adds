import { ReactElement } from 'react';
import AddsLayout from '../../../components/Layout/AddsLayout';
import HomeLayout from '../../../components/Layout/HomeLayout';
import CustomHead from '../../../components/Seo/CustomHead';
import { Seo } from '../../../constants/seo';
import NoticePage from '../../../components/Adds/Notice/NoticePage';

export default function notice() {
	return (
		<>
			<CustomHead title={Seo.Title.notice} />
			<NoticePage />
		</>
	);
}

notice.getLayout = function getLayout(page: ReactElement) {
	return (
		<HomeLayout>
			<AddsLayout>{page}</AddsLayout>
		</HomeLayout>
	);
};
