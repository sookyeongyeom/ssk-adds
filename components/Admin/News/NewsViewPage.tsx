import { useEffect, useState } from 'react';
import { ResponseNews } from '../../../@types/api/news';
import { ViewPageProps } from '../../../@types/pages';
import { Paths } from '../../../constants/paths';
import useEditDelete from '../../../hooks/useEditDelete';
import useGet from '../../../hooks/useGet';
import { getNewsById } from '../../../api/news';
import AdminView from '../../Element/Admin/AdminView';
import { SC } from '../../../styles/styled';

export default function NewsViewPage({ id }: ViewPageProps) {
	const basePath = Paths.admin + Paths.news;
	const { onEdit, onDelete } = useEditDelete(basePath, id);
	const [news, setNews] = useState<ResponseNews.GetById>();

	useEffect(() => {
		if (id !== undefined && !isNaN(id)) useGet(() => getNewsById({ id }), setNews);
	}, [id]);

	return (
		<div>
			<AdminView id={id} basePath={basePath} onEdit={onEdit} onDelete={onDelete}>
				<div>제목</div>
				<div>{news?.title}</div>
				<div>내용</div>
				<div>{news?.body}</div>
				<div>URL</div>
				<SC.LinkHighlight>
					<a href={`http://${news?.url}`}>{news?.url}</a>
				</SC.LinkHighlight>
			</AdminView>
		</div>
	);
}
