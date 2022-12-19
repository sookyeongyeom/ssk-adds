import { RequestPublication, ResponsePublication } from '../@types/api/publication';
import request from './core';

const baseUrl = '/publication';

export const getPublication = ({ page }: RequestPublication.Get) => {
	const url = `${baseUrl}?page=${page}`;
	return request.get<ResponsePublication.Get>(url);
};

export const getPublicationById = ({ id }: RequestPublication.GetById) => {
	const url = `${baseUrl}/${id}`;
	return request.get<ResponsePublication.GetById>(url);
};
