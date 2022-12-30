import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { postLogin } from '../../../api/login';
import useInput from '../../../hooks/useInput';
import { requestAuth } from '../../../modules/auth';
import Input from '../../Element/Shared/Input';
import AdminButton from '../../Element/Admin/AdminButton';
import { Fonts } from '../../../styles/fonts';
import { Colors } from '../../../styles/colors';

export default function LoginPage() {
	const { value: username, onChange: onChangeUsername } = useInput();
	const { value: password, onChange: onChangePassword } = useInput();
	const dispatch = useDispatch();

	const onLogin = async () => {
		try {
			const res = await postLogin({ username, password });
			dispatch(requestAuth({ authToken: res.accessToken }));
		} catch (e) {
			alert('아이디와 비밀번호를 확인해주세요.');
		}
	};

	return (
		/* prettier-ignore */
		<S.LoginPageLayout>
			<div><img src='/assets/footer_logo.png' /></div>
			<h1>SSK ADMIN</h1>
			<p>SSK ADDS 관리자페이지입니다</p>
			<Input value={username} onChange={onChangeUsername} placeholder={'ID'} isBlue />
			<Input value={password} onChange={onChangePassword} type={'password'} placeholder={'Password'} isBlue />
			<AdminButton onClick={onLogin}>LOG IN</AdminButton>
		</S.LoginPageLayout>
	);
}

namespace S {
	export const LoginPageLayout = styled.div`
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-bottom: 1rem;
		align-items: center;
		gap: 1rem;

		> div:first-of-type {
			width: 10rem;
			height: 10rem;
			margin-bottom: 2rem;

			> img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}

		> h1 {
			${Fonts.bold32}
			margin-bottom: 0.3rem;
		}

		> p {
			${Fonts.regular14}
			color:${Colors.gray300};
			margin-bottom: 2.5rem;
		}

		input {
			width: 30rem;
		}

		> button {
			${Fonts.bold16}
			width: 30rem;
			height: 4.5rem;
			justify-content: center;
		}
	`;
}
