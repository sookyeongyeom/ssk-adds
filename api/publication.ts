import { RequestPublication, ResponsePublication } from '../@types/api/publication';
import request from './core';

export const getPublication = ({ page }: RequestPublication.Get) => {
	const url = `/publication?page=${page}`;
	return request.get<ResponsePublication.Get>(url);
};

export const getPublicationById = ({ id }: RequestPublication.GetById) => {
	const url = `/publication/${id}`;
	return request.get<ResponsePublication.GetById>(url);
};
