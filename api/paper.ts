import { RequestPaper, ResponsePaper } from '../@types/api/paper';
import request from './core';
import { toSnake } from 'snake-camel';

const baseUrl = '/data/papers';

export const getPaper = ({ page }: RequestPaper.Get) => {
	const url = `${baseUrl}?page=${page}`;
	return request.get<ResponsePaper.Get>(url);
};

export const getPaperById = ({ id }: RequestPaper.GetById) => {
	const url = `${baseUrl}/${id}`;
	return request.get<ResponsePaper.GetById>(url);
};

export const postPaper = (data: RequestPaper.Post) => {
	const url = `${baseUrl}`;
	return request.post<ResponsePaper.Post, RequestPaper.Post>(url, toSnake({ id: 0, ...data }));
};

export const putPaper = (data: RequestPaper.Put) => {
	const url = `${baseUrl}/${data.id}`;
	return request.put<ResponsePaper.Put, RequestPaper.Put>(url, toSnake(data));
};

export const deletePaper = ({ id }: RequestPaper.Delete) => {
	const url = `${baseUrl}/${id}`;
	return request.delete(url);
};
