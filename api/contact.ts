import { toSnake } from 'snake-camel';
import { RequestContact, ResponseContact } from '../@types/api/contact';
import request from './core';

const baseUrl = '/community/contact';

export const getContact = () => {
	const url = `${baseUrl}`;
	return request.get<ResponseContact.Get>(url);
};

export const putContact = (data: RequestContact.Put) => {
	const url = `${baseUrl}?id=${data.id}`;
	return request.put<ResponseContact.Put, RequestContact.Put>(
		url,
		toSnake({
			...data,
			body: 'body',
		}),
	);
};
