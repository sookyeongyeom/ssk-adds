import { useState, useEffect } from 'react';
import useGet from '../../../hooks/useGet';
import useBoard from '../../../hooks/useBoard';
import { Paths } from '../../../constants/paths';
import { ResponsePaper } from '../../../@types/api/paper';
import { getPaper } from '../../../api/paper';
import useChangePage from '../../../hooks/useChangePage';
import Board from '../../Element/Shared/Board';
import { BoardColumnOrders } from '../../../constants/boardColumnOrders';

export default function PaperPage() {
	const [paper, setPaper] = useState<ResponsePaper.Get>();
	const { page, onChangePage } = useChangePage();
	const maps = useBoard({ dep: paper, order: BoardColumnOrders.paper });

	useEffect(() => {
		useGet(() => getPaper({ page }), setPaper);
	}, [page]);

	return (
		<>
			<h1>Admin 데이터활용논문</h1>
			<Board
				dataMaps={maps}
				basePath={Paths.admin + Paths.paper}
				order={BoardColumnOrders.paper}
				currentPage={page}
				totalPosts={paper?.total}
				onChangePage={onChangePage}
				isAdmin
			/>
		</>
	);
}
