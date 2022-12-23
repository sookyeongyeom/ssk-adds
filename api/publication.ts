import { RequestPublication, ResponsePublication } from '../@types/api/publication';
import request from './core';
import { toSnake } from 'snake-camel';

const baseUrl = '/publication';

export const getPublication = ({ page }: RequestPublication.Get) => {
	const url = `${baseUrl}?page=${page}`;
	return request.get<ResponsePublication.Get>(url);
};

export const getPublicationById = ({ id }: RequestPublication.GetById) => {
	const url = `${baseUrl}/${id}`;
	return request.get<ResponsePublication.GetById>(url);
};

export const postPublication = (data: RequestPublication.Post) => {
	const url = `${baseUrl}`;
	return request.post<ResponsePublication.Post, RequestPublication.Post>(
		url,
		toSnake({ id: 0, ...data }),
	);
};

export const putPublication = (data: RequestPublication.Put) => {
	const url = `${baseUrl}/${data.id}`;
	return request.put<ResponsePublication.Put, RequestPublication.Put>(url, toSnake(data));
};

export const deletePublication = ({ id }: RequestPublication.Delete) => {
	const url = `${baseUrl}/${id}`;
	return request.delete(url);
};
