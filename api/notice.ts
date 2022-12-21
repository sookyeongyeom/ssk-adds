import { RequestNotice, ResponseNotice } from '../@types/api/notice';
import request from './core';

const baseUrl = '/community/notice';

export const getNotice = ({ page }: RequestNotice.Get) => {
	const url = `${baseUrl}?page=${page}`;
	return request.get<ResponseNotice.Get>(url);
};

export const getNoticeById = ({ id }: RequestNotice.GetById) => {
	const url = `${baseUrl}/${id}`;
	return request.get<ResponseNotice.GetById>(url);
};

export const postNotice = ({ writer, title, body, file, created_date }: RequestNotice.Post) => {
	const url = `${baseUrl}`;
	return request.post<ResponseNotice.Post, RequestNotice.Post>(url, {
		id: 0,
		writer,
		title,
		body,
		file,
		created_date,
	});
};

export const putNotice = ({ id, writer, title, body, file, created_date }: RequestNotice.Put) => {
	const url = `${baseUrl}/${id}`;
	return request.put<ResponseNotice.Put, RequestNotice.Put>(url, {
		id,
		writer,
		title,
		body,
		file,
		created_date,
	});
};
