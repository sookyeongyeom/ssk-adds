import { useRouter } from 'next/router';
import { ViewPageProps } from '../../../@types/pages';
import { Paths } from '../../../constants/paths';
import { useEffect, useState } from 'react';
import { ResponsePaper } from '../../../@types/api/paper';
import { deletePaper, getPaperById } from '../../../api/paper';
import useGet from '../../../hooks/useGet';
import AdminButton from '../../Element/Admin/AdminButton';

export default function PaperViewPage({ id }: ViewPageProps) {
	const router = useRouter();
	const basePath = Paths.admin + Paths.paper;
	const [paper, setPaper] = useState<ResponsePaper.GetById>();

	const onEdit = () => router.push(basePath + Paths.edit + `/${id}`);

	const onDelete = async () => {
		if (id) {
			try {
				await deletePaper({ id });
			} catch (e) {
				console.log(e);
			}
		}
	};

	useEffect(() => {
		if (id) useGet(() => getPaperById({ id }), setPaper);
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
