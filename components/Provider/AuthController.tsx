import { useEffect } from 'react';
import { requestAuth } from '../../modules/auth';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../modules/index';

export default function AuthController() {
	const router = useRouter();
	const dispatch = useDispatch();
	const authToken = useSelector(({ auth }: RootState) => auth.authToken);

	useEffect(() => {
		/* 새로고침 시 세션에 인증 토큰이 있다면 스토어에 토큰 복원 */
		const authToken = sessionStorage.getItem('authToken');
		if (authToken) dispatch(requestAuth({ authToken }));
	}, []);

	useEffect(() => {
		/* 주소 혹은 스토어 토큰 상태가 변하면 조건부 라우팅 */
		if (!authToken && router.pathname !== '/admin/login') router.push('/admin/login');
		if (authToken && router.pathname === '/admin/login') router.push('/admin/member');
	}, [router.pathname, authToken]);

	return <></>;
}
