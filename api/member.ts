import { RequestMember, ResponseMember } from '../@types/api/member';
import request from './core';

export const getMember = ({}: RequestMember.Get) => {
	const url = '/intro/researchers';
	return request.get<ResponseMember.Get>(url);
};
