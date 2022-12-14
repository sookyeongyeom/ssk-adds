import { ReactElement } from 'react';
import NoticePage from '../../components/Adds/Notice/NoticePage';
import AddsLayout from '../../components/Layout/AddsLayout';
import HomeLayout from '../../components/Layout/HomeLayout';
import CustomHead from '../../components/Seo/CustomHead';
import { Seo } from '../../constants/seo';

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
