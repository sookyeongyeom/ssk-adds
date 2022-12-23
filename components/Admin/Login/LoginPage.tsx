import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { postLogin } from '../../../api/login';
import useInput from '../../../hooks/useInput';
import { requestAuth } from '../../../modules/auth';

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
		<S.LoginPageLayout>
			<input value={username} onChange={onChangeUsername} />
			<input value={password} onChange={onChangePassword} type={'password'} />
			<button onClick={onLogin}>로그인하기</button>
		</S.LoginPageLayout>
	);
}

namespace S {
	export const LoginPageLayout = styled.div`
		display: flex;
		flex-direction: column;
		gap: 1rem;

		> input {
			width: 20rem;
			border-bottom: 0.1rem solid black;
		}

		> button {
			width: 20rem;
			padding: 0.5rem 1rem;
			background-color: lightgray;
		}
	`;
}
