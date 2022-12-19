import AdminBoard from '../../Shared/AdminBoard';
import { useState, useEffect } from 'react';
import useGet from '../../../hooks/useGet';
import useBoard from '../../../hooks/useBoard';
import { Paths } from '../../../constants/paths';
import { ResponseNoticeKeys } from '../../../constants/responseKeys';
import { ResponseNotice } from '../../../@types/api/notice';
import { getNotice } from '../../../api/notice';
import useChangePage from '../../../hooks/useChangePage';

export default function NoticePage() {
	const [maps, setMaps] = useState<Map<string, string>[]>();
	const [notice, setNotice] = useState<ResponseNotice.Get>();
	const { page, onChangePage } = useChangePage();

	const order = new Map() //
		.set(ResponseNoticeKeys.id, '번호')
		.set(ResponseNoticeKeys.title, '제목')
		.set(ResponseNoticeKeys.writer, '작성자')
		.set(ResponseNoticeKeys.created_date, '날짜');

	useEffect(() => {
		useGet(() => getNotice({ page }), setNotice);
	}, [page]);

	useBoard({ dispatch: setMaps, dep: notice, order });

	return (
		<>
			<h1>Admin 공지사항</h1>
			<AdminBoard
				dataMaps={maps}
				basePath={Paths.admin + Paths.notice}
				order={order}
				currentPage={page}
				totalPosts={notice?.total}
				onChangePage={onChangePage}
			/>
		</>
	);
}
