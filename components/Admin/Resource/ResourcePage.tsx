import AdminBoard from '../../Shared/AdminBoard';
import { useState, useEffect } from 'react';
import useGet from '../../../hooks/useGet';
import useBoard from '../../../hooks/useBoard';
import { Paths } from '../../../constants/paths';
import { ResponseResourceKeys } from '../../../constants/responseKeys';
import { ResponseResource } from '../../../@types/api/resource';
import { getResource } from '../../../api/resource';
import useChangePage from '../../../hooks/useChangePage';

export default function ResourcePage() {
	const [maps, setMaps] = useState<Map<string, string>[]>();
	const [resource, setResource] = useState<ResponseResource.Get>();
	const { page, onChangePage } = useChangePage();

	const order = new Map() //
		.set(ResponseResourceKeys.id, '번호')
		.set(ResponseResourceKeys.title, '제목')
		.set(ResponseResourceKeys.writer, '작성자')
		.set(ResponseResourceKeys.created_date, '날짜');

	useEffect(() => {
		useGet(() => getResource({ page }), setResource);
	}, [page]);

	useBoard({ dispatch: setMaps, dep: resource, order });

	return (
		<>
			<h1>Admin 자료안내</h1>
			<AdminBoard
				dataMaps={maps}
				basePath={Paths.admin + Paths.resource}
				order={order}
				currentPage={page}
				totalPosts={resource?.total}
				onChangePage={onChangePage}
			/>
		</>
	);
}
