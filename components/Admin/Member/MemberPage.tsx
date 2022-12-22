import AdminBoard from '../../Element/Admin/AdminBoard';
import { useState, useEffect } from 'react';
import useGet from '../../../hooks/useGet';
import { getMember } from '../../../api/member';
import { ResponseMember } from '../../../@types/api/member';
import useBoard from '../../../hooks/useBoard';
import { Paths } from '../../../constants/paths';
import { ResponseMemberKeys } from '../../../constants/responseKeys';
import useChangePage from '../../../hooks/useChangePage';

export default function MemberPage() {
	const [maps, setMaps] = useState<Map<string, string>[]>();
	const [member, setMember] = useState<ResponseMember.Get>();
	const { page, onChangePage } = useChangePage();

	const order = new Map() //
		.set(ResponseMemberKeys.id, '번호')
		.set(ResponseMemberKeys.name, '이름')
		.set(ResponseMemberKeys.responsibility, '역할');

	useEffect(() => {
		useGet(() => getMember({ page }), setMember);
	}, [page]);

	useBoard({ dispatch: setMaps, dep: member, order });

	return (
		<>
			<h1>Admin 연구진소개</h1>
			<AdminBoard
				dataMaps={maps}
				basePath={Paths.admin + Paths.member}
				order={order}
				currentPage={page}
				totalPosts={member?.total}
				onChangePage={onChangePage}
			/>
		</>
	);
}
