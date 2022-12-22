import { useState, useEffect } from 'react';
import useGet from '../../../hooks/useGet';
import useBoard from '../../../hooks/useBoard';
import { Paths } from '../../../constants/paths';
import { ResponseFAQ } from '../../../@types/api/faq';
import { getFAQ } from '../../../api/faq';
import useChangePage from '../../../hooks/useChangePage';
import Board from '../../Element/Shared/Board';
import { BoardColumnOrders } from '../../../constants/boardColumnOrders';

export default function FAQPage() {
	const [faq, setFaq] = useState<ResponseFAQ.Get>();
	const { page, onChangePage } = useChangePage();
	const maps = useBoard({ dep: faq, order: BoardColumnOrders.faq });

	useEffect(() => {
		useGet(() => getFAQ({ page }), setFaq);
	}, [page]);

	return (
		<>
			<h1>Admin FAQ</h1>
			<Board
				dataMaps={maps}
				basePath={Paths.admin + Paths.faq}
				order={BoardColumnOrders.faq}
				currentPage={page}
				totalPosts={faq?.total}
				onChangePage={onChangePage}
				isAdmin
			/>
		</>
	);
}
