import { useState, useEffect } from 'react';
import useGet from '../../../hooks/useGet';
import useBoard from '../../../hooks/useBoard';
import { Paths } from '../../../constants/paths';
import { ResponseNotice } from '../../../@types/api/notice';
import { getNotice } from '../../../api/notice';
import useChangePage from '../../../hooks/useChangePage';
import Board from '../../Element/Shared/Board';
import { BoardColumnOrders } from '../../../constants/boardColumnOrders';

export default function NoticePage() {
	const [notice, setNotice] = useState<ResponseNotice.Get>();
	const { page, onChangePage } = useChangePage();
	const maps = useBoard({ dep: notice, order: BoardColumnOrders.notice });

	useEffect(() => {
		useGet(() => getNotice({ page }), setNotice);
	}, [page]);

	return (
		<>
			<Board
				dataMaps={maps}
				basePath={Paths.admin + Paths.notice}
				order={BoardColumnOrders.notice}
				currentPage={page}
				totalPosts={notice?.total}
				size={notice?.size}
				onChangePage={onChangePage}
				isAdmin
			/>
		</>
	);
}
