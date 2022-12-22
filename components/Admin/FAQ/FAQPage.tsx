import AdminBoard from '../../Element/Admin/AdminBoard';
import { useState, useEffect } from 'react';
import useGet from '../../../hooks/useGet';
import useBoard from '../../../hooks/useBoard';
import { Paths } from '../../../constants/paths';
import { ResponseFAQKeys } from '../../../constants/responseKeys';
import { ResponseFAQ } from '../../../@types/api/faq';
import { getFAQ } from '../../../api/faq';
import useChangePage from '../../../hooks/useChangePage';

export default function FAQPage() {
	const [maps, setMaps] = useState<Map<string, string>[]>();
	const [faq, setFaq] = useState<ResponseFAQ.Get>();
	const { page, onChangePage } = useChangePage();

	const order = new Map() //
		.set(ResponseFAQKeys.id, '번호')
		.set(ResponseFAQKeys.title, '제목')
		.set(ResponseFAQKeys.category, '분류')
		.set(ResponseFAQKeys.writer, '작성자')
		.set(ResponseFAQKeys.created_date, '날짜');

	useEffect(() => {
		useGet(() => getFAQ({ page }), setFaq);
	}, [page]);

	useBoard({ dispatch: setMaps, dep: faq, order });

	return (
		<>
			<h1>Admin FAQ</h1>
			<AdminBoard
				dataMaps={maps}
				basePath={Paths.admin + Paths.faq}
				order={order}
				currentPage={page}
				totalPosts={faq?.total}
				onChangePage={onChangePage}
			/>
		</>
	);
}
