import { RequestPaper, ResponsePaper } from '../@types/api/paper';
import request from './core';

const baseUrl = '/data/papers';

export const getPaper = ({ page }: RequestPaper.Get) => {
	const url = `${baseUrl}?page=${page}`;
	return request.get<ResponsePaper.Get>(url);
};
