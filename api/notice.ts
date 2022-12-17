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
