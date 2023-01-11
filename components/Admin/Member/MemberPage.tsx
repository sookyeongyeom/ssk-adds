import { useState, useEffect } from 'react';
import useGet from '../../../hooks/useGet';
import { getMember } from '../../../api/member';
import { ResponseMember } from '../../../@types/api/member';
import useBoard from '../../../hooks/useBoard';
import { Paths } from '../../../constants/paths';
import useChangePage from '../../../hooks/useChangePage';
import Board from '../../Element/Shared/Board';
import { BoardColumnOrders } from '../../../constants/boardColumnOrders';

export default function MemberPage() {
	const [member, setMember] = useState<ResponseMember.Get>();
	const { page, onChangePage } = useChangePage();
	const maps = useBoard({ dep: member, order: BoardColumnOrders.member });

	useEffect(() => {
		useGet(() => getMember({ page }), setMember);
	}, [page]);

	return (
		<>
			<Board
				dataMaps={maps}
				basePath={Paths.admin + Paths.member}
				order={BoardColumnOrders.member}
				currentPage={page}
				totalPosts={member?.total}
				size={member?.size}
				onChangePage={onChangePage}
				isAdmin
			/>
		</>
	);
}
