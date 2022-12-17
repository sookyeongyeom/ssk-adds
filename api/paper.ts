import { RequestPaper, ResponsePaper } from '../@types/api/paper';
import request from './core';

export const getPaper = ({ page }: RequestPaper.Get) => {
	const url = `/data/papers?page=${page}`;
	return request.get<ResponsePaper.Get>(url);
};
