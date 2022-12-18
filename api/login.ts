import { RequestLogin, ResponseLogin } from '../@types/api/login';
import request from './core';

export const postLogin = ({ username, password }: RequestLogin.Post) => {
	const url = '/login';
	return request.post<ResponseLogin.Post, RequestLogin.Post>(
		url,
		{ username, password },
		{
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		},
	);
};
