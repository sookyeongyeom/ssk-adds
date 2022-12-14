import LoginPage from '../../components/Admin/Login/LoginPage';
import CustomHead from '../../components/Seo/CustomHead';
import { Seo } from '../../constants/seo';

export default function login() {
	return (
		<>
			<CustomHead title={Seo.Title.login} isAdmin />
			<LoginPage />
		</>
	);
}
