import useInput from '../../../hooks/useInput';
import { postNews } from '../../../api/news';
import { Paths } from '../../../constants/paths';
import useRoute from '../../../hooks/useRoute';
import NewsNewEdit from './NewsNewEdit';

export default function NewsNewPage() {
	const { value: title, onChange: onChangeTitle } = useInput();
	const { value: body, onChange: onChangeBody } = useInput();
	const { value: url, onChange: onChangeUrl } = useInput();
	const { onRouteToPath } = useRoute(Paths.admin + Paths.news);

	const onSubmit = async () => {
		/* POST */
		const res = await postNews({
			title,
			body,
			url,
			createdDate: new Date().toISOString().split('T')[0],
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
