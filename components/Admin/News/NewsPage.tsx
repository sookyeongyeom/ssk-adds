import { useState, useEffect } from 'react';
import useGet from '../../../hooks/useGet';
import useBoard from '../../../hooks/useBoard';
import { Paths } from '../../../constants/paths';
import { ResponseNews } from '../../../@types/api/news';
import { getNews } from '../../../api/news';
import useChangePage from '../../../hooks/useChangePage';
import Board from '../../Element/Shared/Board';
import { BoardColumnOrders } from '../../../constants/boardColumnOrders';

export default function NewsPage() {
	const [news, setNews] = useState<ResponseNews.Get>();
	const { page, onChangePage } = useChangePage();
	const maps = useBoard({ dep: news, order: BoardColumnOrders.news });

	useEffect(() => {
		useGet(() => getNews({ page }), setNews);
	}, [page]);

	return (
		<>
			<h1>Admin 보도자료</h1>
			<Board
				dataMaps={maps}
				basePath={Paths.admin + Paths.news}
				order={BoardColumnOrders.news}
				currentPage={page}
				totalPosts={news?.total}
				onChangePage={onChangePage}
				isAdmin
			/>
		</>
	);
}
