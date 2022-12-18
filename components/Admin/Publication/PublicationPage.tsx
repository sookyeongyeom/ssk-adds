import AdminBoard from '../../Shared/AdminBoard';
import { useState, useEffect } from 'react';
import useGet from '../../../hooks/useGet';
import useBoard from '../../../hooks/useBoard';
import { Paths } from '../../../constants/paths';
import { ResponsePublicationKeys } from '../../../constants/responseKeys';
import { ResponsePublication } from '../../../@types/api/publication';
import { getPublication } from '../../../api/publication';

export default function PublicationPage() {
	const [maps, setMaps] = useState<Map<string, string>[]>();
	const [publication, setPublication] = useState<ResponsePublication.Get>();

	const order = new Map() //
		.set(ResponsePublicationKeys.id, '번호')
		.set(ResponsePublicationKeys.title, '제목')
		.set(ResponsePublicationKeys.writer, '작성자');

	useEffect(() => {
		useGet(() => getPublication({ page: 1 }), setPublication);
	}, []);

	useBoard({ dispatch: setMaps, dep: publication, order });

	return (
		<>
			<h1>Admin 발간물</h1>
			<AdminBoard dataMaps={maps} basePath={Paths.admin + Paths.publication} order={order} />
		</>
	);
}
