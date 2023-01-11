import { useState, useEffect } from 'react';
import useGet from '../../../hooks/useGet';
import useBoard from '../../../hooks/useBoard';
import { Paths } from '../../../constants/paths';
import { ResponsePublication } from '../../../@types/api/publication';
import { getPublication } from '../../../api/publication';
import useChangePage from '../../../hooks/useChangePage';
import Board from '../../Element/Shared/Board';
import { BoardColumnOrders } from '../../../constants/boardColumnOrders';

export default function PublicationPage() {
	const [publication, setPublication] = useState<ResponsePublication.Get>();
	const { page, onChangePage } = useChangePage();
	const maps = useBoard({ dep: publication, order: BoardColumnOrders.publication });

	useEffect(() => {
		useGet(() => getPublication({ page }), setPublication);
	}, [page]);

	return (
		<>
			<Board
				dataMaps={maps}
				basePath={Paths.admin + Paths.publication}
				order={BoardColumnOrders.publication}
				currentPage={page}
				totalPosts={publication?.total}
				size={publication?.size}
				onChangePage={onChangePage}
				isAdmin
			/>
		</>
	);
}
