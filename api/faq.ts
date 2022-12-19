import { RequestFAQ, ResponseFAQ } from '../@types/api/faq';
import request from './core';

export const getFAQ = ({ page }: RequestFAQ.Get) => {
	const url = `/community/faq?page=${page}`;
	return request.get<ResponseFAQ.Get>(url);
};
