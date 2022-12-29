import { ViewPageProps } from '../../../@types/pages';
import { Paths } from '../../../constants/paths';
import { useEffect, useState } from 'react';
import { ResponsePaper } from '../../../@types/api/paper';
import { getPaperById } from '../../../api/paper';
import useGet from '../../../hooks/useGet';
import useEditDelete from '../../../hooks/useEditDelete';
import AdminView from '../../Element/Admin/AdminView';

export default function PaperViewPage({ id }: ViewPageProps) {
	const basePath = Paths.admin + Paths.paper;
	const { onEdit, onDelete } = useEditDelete(basePath, id);
	const [paper, setPaper] = useState<ResponsePaper.GetById>();

	useEffect(() => {
		if (id !== undefined && !isNaN(id)) useGet(() => getPaperById({ id }), setPaper);
	}, [id]);

	return (
		<div>
			<AdminView id={id} basePath={basePath} onEdit={onEdit} onDelete={onDelete}>
				<div>제목</div>
				<div>{paper?.title}</div>
				<div>작성연도</div>
				<div>{paper?.year}</div>
				<div>키워드</div>
				<div>
					<ul>
						{paper?.keywords.split(',').map((keyword, i) => (
							<li key={i}>{keyword}</li>
						))}
					</ul>
				</div>
				<div>연구자</div>
				<div>{paper?.researcherName}</div>
				<div>DOI</div>
				<div>{paper?.doi}</div>
			</AdminView>
		</div>
	);
}
