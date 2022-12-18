import AdminBoard from '../../Shared/AdminBoard';
import { useState, useEffect } from 'react';
import useGet from '../../../hooks/useGet';
import { getMember } from '../../../api/member';
import { ResponseMember } from '../../../@types/api/member';
import useBoard from '../../../hooks/useBoard';
import { Paths } from '../../../constants/paths';
import { ResponseMemberKeys } from '../../../constants/responseKeys';

export default function MemberPage() {
	const [maps, setMaps] = useState<Map<string, string>[]>();
	const [member, setMember] = useState<ResponseMember.Get>();

	const order = new Map() //
		.set(ResponseMemberKeys.id, '번호')
		.set(ResponseMemberKeys.name, '이름')
		.set(ResponseMemberKeys.responsibility, '역할');

	useEffect(() => {
		useGet(() => getMember({}), setMember);
	}, []);

	useBoard({ dispatch: setMaps, dep: member, order });

	return (
		<>
			<h1>Admin 연구진소개</h1>
			<AdminBoard dataMaps={maps} basePath={Paths.admin + Paths.member} order={order} />
		</>
	);
}
