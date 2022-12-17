import { useState, useEffect } from 'react';
import styled from 'styled-components';
import useGet from '../../../hooks/useGet';
import Board from '../../Shared/Board';
import { ResponseNotice } from '../../../@types/api/notice';
import { getNotice } from '../../../api/notice';
import { Recipes } from '../../../styles/recipes';
import SelectBox from '../../Shared/SelectBox';

export default function NoticePage() {
	const [notice, setNotice] = useState<ResponseNotice.Get>();

	useEffect(() => {
		useGet(() => getNotice({ page: 1 }), setNotice);
	}, []);

	return (
		<S.NoticePageLayout>
			<SelectBox options={['최신순 정렬']} />
			<Board datas={notice!} isNotice />
		</S.NoticePageLayout>
	);
}

namespace S {
	export const NoticePageLayout = styled.div`
		${Recipes.AlignSelectBoxForBoard}
	`;
}
