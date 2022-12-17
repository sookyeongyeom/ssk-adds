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
