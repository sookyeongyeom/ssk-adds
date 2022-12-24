import { ViewPageProps } from '../../../@types/pages';
import { Paths } from '../../../constants/paths';
import { useEffect, useState } from 'react';
import { ResponsePaper } from '../../../@types/api/paper';
import { getPaperById } from '../../../api/paper';
import useGet from '../../../hooks/useGet';
import AdminButton from '../../Element/Admin/AdminButton';
import useEditDelete from '../../../hooks/useEditDelete';

export default function PaperViewPage({ id }: ViewPageProps) {
	const basePath = Paths.admin + Paths.paper;
	const { onEdit, onDelete } = useEditDelete(basePath, id);
	const [paper, setPaper] = useState<ResponsePaper.GetById>();

	useEffect(() => {
		if (id !== undefined) useGet(() => getPaperById({ id }), setPaper);
	}, [id]);

	return (
		<div>
			<AdminButton onClick={onEdit}>수정</AdminButton>{' '}
			<AdminButton onClick={onDelete}>삭제</AdminButton>
			{paper && (
				<>
					<div>제목:{paper.title}</div>
					<div>작성연도:{paper.year}</div>
					<div>키워드:{paper.keywords}</div>
					<div>연구자:{paper.researcherName}</div>
					<div>DOI:{paper.doi}</div>
				</>
			)}
		</div>
	);
}
