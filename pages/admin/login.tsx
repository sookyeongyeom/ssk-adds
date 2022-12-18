import LoginPage from '../../components/Admin/Login/LoginPage';
import CustomHead from '../../components/Seo/CustomHead';
import { Seo } from '../../constants/seo';
import LoginLayout from '../../components/Layout/LoginLayout';
import { ReactElement } from 'react';

export default function login() {
	return (
		<>
			<CustomHead title={Seo.Title.login} isAdmin />
			<LoginPage />
		</>
	);
}

login.getLayout = function getLayout(page: ReactElement) {
	return <LoginLayout>{page}</LoginLayout>;
};
