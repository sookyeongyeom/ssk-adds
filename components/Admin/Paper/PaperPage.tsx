import AdminBoard from '../../Shared/AdminBoard';
import { useState, useEffect } from 'react';
import useGet from '../../../hooks/useGet';
import useBoard from '../../../hooks/useBoard';
import { Paths } from '../../../constants/paths';
import { ResponsePaperKeys } from '../../../constants/responseKeys';
import { ResponsePaper } from '../../../@types/api/paper';
import { getPaper } from '../../../api/paper';

export default function PaperPage() {
	const [maps, setMaps] = useState<Map<string, string>[]>();
	const [paper, setPaper] = useState<ResponsePaper.Get>();

	const order = new Map() //
		.set(ResponsePaperKeys.id, '번호')
		.set(ResponsePaperKeys.title, '제목')
		.set(ResponsePaperKeys.researcher_name, '연구자')
		.set(ResponsePaperKeys.doi, 'DOI');

	useEffect(() => {
		useGet(() => getPaper({ page: 1 }), setPaper);
	}, []);

	useBoard({ dispatch: setMaps, dep: paper, order });

	return (
		<>
			<h1>Admin 데이터활용논문</h1>
			<AdminBoard dataMaps={maps} basePath={Paths.admin + Paths.paper} order={order} />
		</>
	);
}
