import { RequestResource, ResponseResource } from '../@types/api/resource';
import request from './core';

export const getResource = ({ page }: RequestResource.Get) => {
	const url = `/data/intro?page=${page}`;
	return request.get<ResponseResource.Get>(url);
};

export const getResourceById = ({ id }: RequestResource.GetById) => {
	const url = `/data/intro/${id}`;
	return request.get<ResponseResource.GetById>(url);
};

export const postResource = ({ writer, title, body, file, created_date }: RequestResource.Post) => {
	const url = '/data/intro';
	return request.post<ResponseResource.Post, RequestResource.Post>(url, {
		id: 0,
		writer,
		title,
		body,
		file,
		created_date,
	});
};
