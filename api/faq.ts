import { RequestFAQ, ResponseFAQ } from '../@types/api/faq';
import request from './core';

const baseUrl = '/community/faq';

export const getFAQ = ({ page }: RequestFAQ.Get) => {
	const url = `${baseUrl}?page=${page}`;
	return request.get<ResponseFAQ.Get>(url);
};
