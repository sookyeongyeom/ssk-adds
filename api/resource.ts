import { RequestResource, ResponseResource } from '../@types/api/resource';
import request from './core';

const baseUrl = '/data/intro';

export const getResource = ({ page }: RequestResource.Get) => {
	const url = `${baseUrl}?page=${page}`;
	return request.get<ResponseResource.Get>(url);
};

export const getResourceById = ({ id }: RequestResource.GetById) => {
	const url = `${baseUrl}/${id}`;
	return request.get<ResponseResource.GetById>(url);
};

export const postResource = ({ writer, title, body, file, created_date }: RequestResource.Post) => {
	const url = `${baseUrl}`;
	return request.post<ResponseResource.Post, RequestResource.Post>(url, {
		id: 0,
		writer,
		title,
		body,
		file,
		created_date,
	});
};
