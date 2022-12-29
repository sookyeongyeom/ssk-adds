import { useEffect, useState } from 'react';
import { ResponseNews } from '../../../@types/api/news';
import { EditPageInnerShellProps, ViewPageProps } from '../../../@types/pages';
import useGet from '../../../hooks/useGet';
import { getNewsById, putNews } from '../../../api/news';
import useInput from '../../../hooks/useInput';
import { Paths } from '../../../constants/paths';
import useRoute from '../../../hooks/useRoute';
import NewsNewEdit from './NewsNewEdit';

export default function NewsEditPage({ id }: ViewPageProps) {
	const [news, setNews] = useState<ResponseNews.GetById>();

	useEffect(() => {
		if (id !== undefined && !isNaN(id)) useGet(() => getNewsById({ id }), setNews);
	}, [id]);

	return <>{news && <NewsEditPageInnerShell id={id} data={news} />}</>;
}

function NewsEditPageInnerShell({
	id,
	data,
}: Omit<EditPageInnerShellProps<ResponseNews.GetById>, 'path'>) {
	const { value: title, onChange: onChangeTitle } = useInput(data?.title);
	const { value: body, onChange: onChangeBody } = useInput(data?.body);
	const { value: url, onChange: onChangeUrl } = useInput(data?.url);
	const { onRouteToPath } = useRoute(Paths.admin + Paths.news + `/${id}`);

	const onSubmit = async () => {
		/* PUT */
		const res = await putNews({
			id,
			title,
			body,
			url,
			createdDate: data?.createdDate || new Date().toISOString().split('T')[0],
		});
		console.log(res);
		onRouteToPath();
	};

	return (
		<>
			<NewsNewEdit
				title={title}
				body={body}
				url={url}
				onChangeTitle={onChangeTitle}
				onChangeBody={onChangeBody}
				onChangeUrl={onChangeUrl}
				onSubmit={onSubmit}
			/>
		</>
	);
}
