import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ResponseResource } from '../../../@types/api/resource';
import useGet from '../../../hooks/useGet';
import Board from '../../Element/Adds/Board';
import { getResource } from '../../../api/resource';
import SelectBox from '../../Element/Adds/SelectBox';
import { Recipes } from '../../../styles/recipes';
import useChangePage from '../../../hooks/useChangePage';

export default function ResourcePage() {
	const [resource, setResource] = useState<ResponseResource.Get>();
	const { page, onChangePage } = useChangePage();

	useEffect(() => {
		// eslint-disable-next-line react-hooks/rules-of-hooks
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
