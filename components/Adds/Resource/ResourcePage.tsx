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
import useMobile from '../../../hooks/useMobile';

export default function ResourcePage() {
	const [resource, setResource] = useState<ResponseResource.Get>();
	const { page, onChangePage } = useChangePage();

	const isMobile = useMobile();
	const maps = !isMobile
		? useBoard({ dep: resource, order: BoardColumnOrders.resource })
		: useBoard({ dep: resource, order: BoardColumnOrders.mobile });

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
				size={resource?.size}
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
