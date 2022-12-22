import AdminBoard from '../../Element/Admin/AdminBoard';
import { useState, useEffect } from 'react';
import useGet from '../../../hooks/useGet';
import useBoard from '../../../hooks/useBoard';
import { Paths } from '../../../constants/paths';
import { ResponseNewsKeys } from '../../../constants/responseKeys';
import { ResponseNews } from '../../../@types/api/news';
import { getNews } from '../../../api/news';
import useChangePage from '../../../hooks/useChangePage';

export default function NewsPage() {
	const [maps, setMaps] = useState<Map<string, string>[]>();
	const [news, setNews] = useState<ResponseNews.Get>();
	const { page, onChangePage } = useChangePage();

	const order = new Map() //
		.set(ResponseNewsKeys.id, '번호')
		.set(ResponseNewsKeys.title, '제목')
		.set(ResponseNewsKeys.created_date, '날짜');

	useEffect(() => {
		useGet(() => getNews({ page }), setNews);
	}, [page]);

	useBoard({ dispatch: setMaps, dep: news, order });

	return (
		<>
			<h1>Admin 보도자료</h1>
			<AdminBoard
				dataMaps={maps}
				basePath={Paths.admin + Paths.news}
				order={order}
				currentPage={page}
				totalPosts={news?.total}
				onChangePage={onChangePage}
			/>
		</>
	);
}
