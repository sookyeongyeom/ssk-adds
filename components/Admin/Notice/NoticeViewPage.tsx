import { useState, useEffect } from 'react';
import styled from 'styled-components';
import useGet from '../../../hooks/useGet';
import View from '../../Shared/View';
import { Paths } from '../../../constants/paths';
import { ResponseNotice } from '../../../@types/api/notice';
import { getNoticeById } from '../../../api/notice';

export default function NoticeViewPage({ id }: ViewPageProps) {
	const [notice, setNotice] = useState<ResponseNotice.GetById>();
	const [prev, setPrev] = useState<ResponseNotice.GetById>();
	const [next, setNext] = useState<ResponseNotice.GetById>();

	useEffect(() => {
		if (!isNaN(id)) {
			useGet(() => getNoticeById({ id }), setNotice);
			useGet(() => getNoticeById({ id: id - 1 }), setPrev).catch(() => setPrev(undefined));
			useGet(() => getNoticeById({ id: id + 1 }), setNext).catch(() => setNext(undefined));
		}
	}, [id]);

	return (
		<S.NoticeViewPageLayout>
			<View
				data={notice!}
				boardPath={Paths.admin + Paths.notice}
				prev={prev && { title: prev?.title!, path: Paths.admin + Paths.notice + `/${prev?.id}` }}
				next={next && { title: next?.title!, path: Paths.admin + Paths.notice + `/${next?.id}` }}
				isNotice
			/>
		</S.NoticeViewPageLayout>
	);
}

namespace S {
	export const NoticeViewPageLayout = styled.div``;
}