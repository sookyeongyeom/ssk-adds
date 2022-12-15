import { RequestFAQ } from '../@types/api/faq';
import request from './core';

export const getFAQ = (page: number, size: number) => {
	const url = `/community/faq?page=${page}&size=${size}`;
	return request.get<RequestFAQ.Get>(url);
};
