import { useState, useEffect } from 'react';
import useGet from '../../../hooks/useGet';
import useBoard from '../../../hooks/useBoard';
import { Paths } from '../../../constants/paths';
import { ResponseResource } from '../../../@types/api/resource';
import { getResource } from '../../../api/resource';
import useChangePage from '../../../hooks/useChangePage';
import Board from '../../Element/Shared/Board';
import { BoardColumnOrders } from '../../../constants/boardColumnOrders';

export default function ResourcePage() {
	const [resource, setResource] = useState<ResponseResource.Get>();
	const { page, onChangePage } = useChangePage();
	const maps = useBoard({ dep: resource, order: BoardColumnOrders.resource });

	useEffect(() => {
		useGet(() => getResource({ page }), setResource);
	}, [page]);

	return (
		<>
			<Board
				dataMaps={maps}
				basePath={Paths.admin + Paths.resource}
				order={BoardColumnOrders.resource}
				currentPage={page}
				totalPosts={resource?.total}
				onChangePage={onChangePage}
				isAdmin
			/>
		</>
	);
}
