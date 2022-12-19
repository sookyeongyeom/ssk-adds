import { RequestNotice, ResponseNotice } from '../@types/api/notice';
import request from './core';

export const getNotice = ({ page }: RequestNotice.Get) => {
	const url = `/community/notice?page=${page}`;
	return request.get<ResponseNotice.Get>(url);
};

export const getNoticeById = ({ id }: RequestNotice.GetById) => {
	const url = `/community/notice/${id}`;
	return request.get<ResponseNotice.GetById>(url);
};

export const postNotice = ({ writer, title, body, file, created_date }: RequestNotice.Post) => {
	const url = '/community/notice';
	return request.post<ResponseNotice.Post, RequestNotice.Post>(url, {
		id: 0,
		writer,
		title,
		body,
		file,
		created_date,
	});
};
