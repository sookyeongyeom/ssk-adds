import { toSnake } from 'snake-camel';
import { RequestMember, ResponseMember } from '../@types/api/member';
import request from './core';

const baseUrl = '/intro/researchers';

export const getMember = ({ page }: RequestMember.Get) => {
	const url = `${baseUrl}?page=${page}`;
	return request.get<ResponseMember.Get>(url);
};

export const getMemberById = ({ id }: RequestMember.GetById) => {
	const url = `${baseUrl}/${id}`;
	return request.get<ResponseMember.GetById>(url);
};

export const postMember = (data: RequestMember.Post) => {
	const url = `${baseUrl}`;
	return request.post<ResponseMember.Post, RequestMember.Post>(url, toSnake({ id: 0, ...data }));
};

export const putMember = (data: RequestMember.Put) => {
	const url = `${baseUrl}/${data.id}`;
	return request.put<ResponseMember.Put, RequestMember.Put>(url, toSnake(data));
};

export const deleteMember = ({ id }: RequestMember.Delete) => {
	const url = `${baseUrl}/${id}`;
	return request.delete(url);
};
