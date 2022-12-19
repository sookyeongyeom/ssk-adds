import { useState, useEffect } from 'react';
import styled from 'styled-components';
import useGet from '../../../hooks/useGet';
import Board from '../../Shared/Board';
import { ResponseNotice } from '../../../@types/api/notice';
import { getNotice } from '../../../api/notice';
import { Recipes } from '../../../styles/recipes';
import SelectBox from '../../Shared/SelectBox';
import useChangePage from '../../../hooks/useChangePage';

export default function NoticePage() {
	const [notice, setNotice] = useState<ResponseNotice.Get>();
	const { page, onChangePage } = useChangePage();

	useEffect(() => {
		useGet(() => getNotice({ page }), setNotice);
	}, [page]);

	return (
		<S.NoticePageLayout>
			<SelectBox options={['최신순 정렬']} />
			<Board
				datas={notice!}
				currentPage={page}
				totalPosts={notice && notice.total}
				onChangePage={onChangePage}
				isNotice
			/>
		</S.NoticePageLayout>
	);
}

namespace S {
	export const NoticePageLayout = styled.div`
		${Recipes.AlignSelectBoxForBoard}
	`;
}
