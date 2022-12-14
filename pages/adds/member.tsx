import { ReactElement } from 'react';
import MemberPage from '../../components/Adds/Member/MemberPage';
import AddsLayout from '../../components/Layout/AddsLayout';
import HomeLayout from '../../components/Layout/HomeLayout';
import CustomHead from '../../components/Seo/CustomHead';
import { Seo } from '../../constants/seo';

export default function member() {
	return (
		<>
			<CustomHead title={Seo.Title.member} />
			<MemberPage />
		</>
	);
}

member.getLayout = function getLayout(page: ReactElement) {
	return (
		<HomeLayout>
			<AddsLayout>{page}</AddsLayout>
		</HomeLayout>
	);
};
