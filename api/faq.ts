import { RequestFAQ, ResponseFAQ } from '../@types/api/faq';
import request from './core';

export const getFAQ = ({ page, size }: RequestFAQ.Get) => {
	const url = `/community/faq?page=${page}&size=${size}`;
	return request.get<ResponseFAQ.Get>(url);
};
