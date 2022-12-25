import { useEffect, useState } from 'react';
import { ResponseNews } from '../../../@types/api/news';
import { ViewPageProps } from '../../../@types/pages';
import { Paths } from '../../../constants/paths';
import useEditDelete from '../../../hooks/useEditDelete';
import useGet from '../../../hooks/useGet';
import { getNewsById } from '../../../api/news';
import AdminButton from '../../Element/Admin/AdminButton';
import AdminBoardButton from '../../Element/Shared/AdminBoardButton';

export default function NewsViewPage({ id }: ViewPageProps) {
	const basePath = Paths.admin + Paths.news;
	const { onEdit, onDelete } = useEditDelete(basePath, id);
	const [news, setNews] = useState<ResponseNews.GetById>();

	useEffect(() => {
		if (id !== undefined) useGet(() => getNewsById({ id }), setNews);
	}, [id]);

	return (
		<div>
			<AdminButton onClick={onEdit}>수정</AdminButton>{' '}
			<AdminButton onClick={onDelete}>삭제</AdminButton>
			{news && (
				<>
					<div>제목:{news.title}</div>
					<div>내용:{news.body}</div>
					<div>링크:{news.url}</div>
				</>
			)}
			<AdminBoardButton boardPath={basePath} />
		</div>
	);
}
