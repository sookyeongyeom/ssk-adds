import { RequestNotice, ResponseNotice } from '../@types/api/notice';
import request from './core';
import { toSnake } from 'snake-camel';

const baseUrl = '/community/notice';

export const getNotice = ({ page }: RequestNotice.Get) => {
	const url = `${baseUrl}?page=${page}`;
	return request.get<ResponseNotice.Get>(url);
};

export const getNoticeById = ({ id }: RequestNotice.GetById) => {
	const url = `${baseUrl}/${id}`;
	return request.get<ResponseNotice.GetById>(url);
};

export const postNotice = (data: RequestNotice.Post) => {
	const url = `${baseUrl}`;
	return request.post<ResponseNotice.Post, RequestNotice.Post>(
		url,
		toSnake({
			id: 0,
			...data,
		}),
	);
};

export const putNotice = (data: RequestNotice.Put) => {
	const url = `${baseUrl}/${data.id}`;
	return request.put<ResponseNotice.Put, RequestNotice.Put>(url, toSnake(data));
};

export const deleteNotice = ({ id }: RequestNotice.Delete) => {
	const url = `${baseUrl}/${id}`;
	return request.delete(url);
};
