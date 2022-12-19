import { RequestLogin, ResponseLogin } from '../@types/api/login';
import request from './core';

const baseUrl = '/login';

export const postLogin = ({ username, password }: RequestLogin.Post) => {
	const url = `${baseUrl}`;
	return request.post<ResponseLogin.Post, RequestLogin.Post>(
		url,
		{ username, password },
		{
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		},
	);
};
