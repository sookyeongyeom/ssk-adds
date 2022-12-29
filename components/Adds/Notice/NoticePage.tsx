import { useState, useEffect } from 'react';
import styled from 'styled-components';
import useGet from '../../../hooks/useGet';
import Board from '../../Element/Shared/Board';
import { ResponseNotice } from '../../../@types/api/notice';
import { getNotice } from '../../../api/notice';
import SelectBox from '../../Element/Adds/SelectBox';
import useChangePage from '../../../hooks/useChangePage';
import useBoard from '../../../hooks/useBoard';
import { Paths } from '../../../constants/paths';
import { BoardColumnOrders } from '../../../constants/boardColumnOrders';
import { SC } from '../../../styles/styled';

export default function NoticePage() {
	const [notice, setNotice] = useState<ResponseNotice.Get>();
	const { page, onChangePage } = useChangePage();
	const maps = useBoard({ dep: notice, order: BoardColumnOrders.notice });

	useEffect(() => {
		useGet(() => getNotice({ page }), setNotice);
	}, [page]);

	return (
		<S.NoticePageLayout>
			<SelectBox options={['최신순 정렬']} />
			<Board
				dataMaps={maps}
				basePath={Paths.adds + Paths.notice}
				order={BoardColumnOrders.notice}
				currentPage={page}
				totalPosts={notice?.total}
				onChangePage={onChangePage}
			/>
		</S.NoticePageLayout>
	);
}

namespace S {
	export const NoticePageLayout = styled.div`
		${SC.AlignSelectBoxForBoard}
	`;
}
