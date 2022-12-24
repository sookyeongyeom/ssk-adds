import { toSnake } from 'snake-camel';
import { RequestFAQ, ResponseFAQ } from '../@types/api/faq';
import request from './core';

const baseUrl = '/community/faq';

export const getFAQ = ({ page }: RequestFAQ.Get) => {
	const url = `${baseUrl}?page=${page}`;
	return request.get<ResponseFAQ.Get>(url);
};

export const postFAQ = (data: RequestFAQ.Post) => {
	const url = `${baseUrl}`;
	return request.post<ResponseFAQ.Post, RequestFAQ.Post>(url, toSnake({ id: 0, ...data }));
};

export const putFAQ = (data: RequestFAQ.Put) => {
	const url = `${baseUrl}/${data.id}`;
	return request.put<ResponseFAQ.Put, RequestFAQ.Put>(url, toSnake(data));
};

export const deleteFAQ = ({ id }: RequestFAQ.Delete) => {
	const url = `${baseUrl}/${id}`;
	return request.delete(url);
};
