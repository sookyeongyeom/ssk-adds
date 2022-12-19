import { RequestMember, ResponseMember } from '../@types/api/member';
import request from './core';

const baseUrl = '/intro/researchers';

export const getMember = ({ page }: RequestMember.Get) => {
	const url = `${baseUrl}?page=${page}`;
	return request.get<ResponseMember.Get>(url);
};
