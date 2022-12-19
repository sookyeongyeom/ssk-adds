import { RequestMember, ResponseMember } from '../@types/api/member';
import request from './core';

export const getMember = ({ page }: RequestMember.Get) => {
	const url = `/intro/researchers?page=${page}`;
	return request.get<ResponseMember.Get>(url);
};
