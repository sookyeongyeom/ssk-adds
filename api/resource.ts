import { RequestResource, ResponseResource } from '../@types/api/resource';
import request from './core';
import { toSnake } from 'snake-camel';

const baseUrl = '/data/intro';

export const getResource = ({ page }: RequestResource.Get) => {
	const url = `${baseUrl}?page=${page}`;
	return request.get<ResponseResource.Get>(url);
};

export const getResourceById = ({ id }: RequestResource.GetById) => {
	const url = `${baseUrl}/${id}`;
	return request.get<ResponseResource.GetById>(url);
};

export const postResource = (data: RequestResource.Post) => {
	const url = `${baseUrl}`;
	return request.post<ResponseResource.Post, RequestResource.Post>(
		url,
		toSnake({
			id: 0,
			...data,
		}),
	);
};

/* prettier-ignore */
export const putResource = (data: RequestResource.Put) => {
	const url = `${baseUrl}/${data.id}`;
	return request.put<ResponseResource.Put, RequestResource.Put>(url, toSnake(data));
};

export const deleteResource = ({ id }: RequestResource.Delete) => {
	const url = `${baseUrl}/${id}`;
	return request.delete(url);
};
