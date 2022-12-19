import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ResponseResource } from '../../../@types/api/resource';
import useGet from '../../../hooks/useGet';
import Board from '../../Shared/Board';
import { getResource } from '../../../api/resource';
import SelectBox from '../../Shared/SelectBox';
import { Recipes } from '../../../styles/recipes';

export default function ResourcePage() {
	const [resource, setResource] = useState<ResponseResource.Get>();
	const [page, setPage] = useState(1);

	const onChangePage = (page: number) => {
		setPage(page);
	};

	useEffect(() => {
		useGet(() => getResource({ page }), setResource);
	}, [page]);

	return (
		<S.ResourcePageLayout>
			<SelectBox options={['최신순 정렬']} />
			<Board
				datas={resource!}
				currentPage={page}
				totalPosts={resource && resource.total}
				onChangePage={onChangePage}
			/>
		</S.ResourcePageLayout>
	);
}

namespace S {
	export const ResourcePageLayout = styled.div`
		${Recipes.AlignSelectBoxForBoard}
	`;
}
