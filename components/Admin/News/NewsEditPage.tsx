import { useEffect, useState } from 'react';
import { ResponseNews } from '../../../@types/api/news';
import { EditPageInnerShellProps, ViewPageProps } from '../../../@types/pages';
import useGet from '../../../hooks/useGet';
import { getNewsById, putNews } from '../../../api/news';
import useInput from '../../../hooks/useInput';
import Input from '../../Element/Shared/Input';
import AdminButton from '../../Element/Admin/AdminButton';
import { Paths } from '../../../constants/paths';
import useRoute from '../../../hooks/useRoute';

export default function NewsEditPage({ id }: ViewPageProps) {
	const [news, setNews] = useState<ResponseNews.GetById>();

	useEffect(() => {
		if (id !== undefined) useGet(() => getNewsById({ id }), setNews);
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
			<Input label={'제목'} value={title} onChange={onChangeTitle} />
			<Input label={'내용'} value={body} onChange={onChangeBody} />
			<Input label={'링크'} value={url} onChange={onChangeUrl} />
			<AdminButton onClick={onSubmit}>완료</AdminButton>
		</>
	);
}
