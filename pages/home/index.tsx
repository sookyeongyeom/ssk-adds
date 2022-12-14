import { ReactElement } from 'react';
import HomePage from '../../components/Home/HomePage';
import CustomHead from '../../components/Seo/CustomHead';
import { Seo } from '../../constants/seo';
import HomeLayout from '../../components/Layout/HomeLayout';

export default function index() {
	return (
		<>
			<CustomHead title={Seo.Title.home} />
			<HomePage />
		</>
	);
}

index.getLayout = function getLayout(page: ReactElement) {
	return <HomeLayout>{page}</HomeLayout>;
};
