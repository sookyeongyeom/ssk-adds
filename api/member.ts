import { toSnake } from 'snake-camel';
import { RequestMember, ResponseMember } from '../@types/api/member';
import request from './core';

const baseUrl = '/intro/researchers';

export const getMember = ({ page }: RequestMember.Get) => {
	const url = `${baseUrl}?page=${page}`;
	return request.get<ResponseMember.Get>(url);
};

export const postMember = (data: RequestMember.Post) => {
	const url = `${baseUrl}`;
	return request.post<ResponseMember.Post, RequestMember.Post>(url, toSnake({ id: 0, ...data }));
};
