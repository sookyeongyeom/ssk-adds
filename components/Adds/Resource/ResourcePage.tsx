import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ResponseResource } from '../../../@types/api/resource';
import useGet from '../../../hooks/useGet';
import Board from '../../Element/Shared/Board';
import { getResource } from '../../../api/resource';
import SelectBox from '../../Element/Adds/SelectBox';
import useChangePage from '../../../hooks/useChangePage';
import useBoard from '../../../hooks/useBoard';
import { Paths } from '../../../constants/paths';
import { BoardColumnOrders } from '../../../constants/boardColumnOrders';
import { SC } from '../../../styles/styled';

export default function ResourcePage() {
	const [resource, setResource] = useState<ResponseResource.Get>();
	const { page, onChangePage } = useChangePage();
	const maps = useBoard({ dep: resource, order: BoardColumnOrders.resource });

	useEffect(() => {
		useGet(() => getResource({ page }), setResource);
	}, [page]);

	return (
		<S.ResourcePageLayout>
			<SelectBox options={['최신순 정렬']} />
			<Board
				dataMaps={maps}
				basePath={Paths.adds + Paths.resource}
				order={BoardColumnOrders.resource}
				currentPage={page}
				totalPosts={resource?.total}
				onChangePage={onChangePage}
			/>
		</S.ResourcePageLayout>
	);
}

namespace S {
	export const ResourcePageLayout = styled.div`
		${SC.AlignSelectBoxForBoard}
	`;
}
