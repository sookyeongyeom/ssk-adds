import { useState, useEffect } from 'react';
import styled from 'styled-components';
import useGet from '../../../hooks/useGet';
import View from '../../Element/Shared/View';
import { Paths } from '../../../constants/paths';
import { ResponseNotice } from '../../../@types/api/notice';
import { getNoticeById } from '../../../api/notice';
import { ViewPageProps } from '../../../@types/pages';

export default function NoticeViewPage({ id }: ViewPageProps) {
	const [notice, setNotice] = useState<ResponseNotice.GetById>();

	useEffect(() => {
		if (!isNaN(id)) useGet(() => getNoticeById({ id }), setNotice);
	}, [id]);

	return (
		<>
			<S.NoticeViewPageLayout>
				<View id={id} data={notice!} basePath={Paths.admin + Paths.notice} isNotice isAdmin />
			</S.NoticeViewPageLayout>
		</>
	);
}

namespace S {
	export const NoticeViewPageLayout = styled.div``;
}
