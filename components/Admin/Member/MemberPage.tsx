import AdminBoard from '../../Shared/AdminBoard';
import { useState, useEffect } from 'react';
import useGet from '../../../hooks/useGet';
import { getMember } from '../../../api/member';
import { ResponseMember } from '../../../@types/api/member';
import useBoard from '../../../hooks/useBoard';

export default function MemberPage() {
	const [maps, setMaps] = useState<Map<string, string>[]>();
	const [member, setMember] = useState<ResponseMember.Get>();

	const order = new Map() //
		.set('번호', 'id')
		.set('이름', 'name')
		.set('역할', 'responsibility');

	useEffect(() => {
		useGet(() => getMember({}), setMember);
	}, []);

	useBoard({ dispatch: setMaps, dep: member, order });

	return (
		<>
			<h1>Admin 연구진소개</h1>
			<AdminBoard dataMaps={maps} />
		</>
	);
}
