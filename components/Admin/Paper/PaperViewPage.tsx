import { ViewPageProps } from '../../../@types/pages';
import { Paths } from '../../../constants/paths';
import { useEffect, useState } from 'react';
import { ResponsePaper } from '../../../@types/api/paper';
import { getPaperById } from '../../../api/paper';
import useGet from '../../../hooks/useGet';
import useEditDelete from '../../../hooks/useEditDelete';
import AdminView from '../../Element/Admin/AdminView';
import { SC } from '../../../styles/styled';

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
				<SC.Label>제목</SC.Label>
				<div>{paper?.title}</div>
				<SC.Label>작성연도</SC.Label>
				<div>{paper?.year}</div>
				<SC.Label>키워드</SC.Label>
				<div>
					<ul>
						{paper?.keywords.split(',').map((keyword, i) => (
							<li key={i}>{keyword}</li>
						))}
					</ul>
				</div>
				<SC.Label>연구자</SC.Label>
				<div>{paper?.researcherName}</div>
				<SC.Label>DOI</SC.Label>
				<div>{paper?.doi}</div>
			</AdminView>
		</div>
	);
}
