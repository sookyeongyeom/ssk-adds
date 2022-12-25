import useInput from '../../../hooks/useInput';
import { postNews } from '../../../api/news';
import Input from '../../Element/Shared/Input';
import AdminButton from '../../Element/Admin/AdminButton';
import { Paths } from '../../../constants/paths';
import useRoute from '../../../hooks/useRoute';

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
			<Input label={'제목'} onChange={onChangeTitle} />
			<Input label={'내용'} onChange={onChangeBody} />
			<Input label={'링크'} onChange={onChangeUrl} />
			<AdminButton onClick={onSubmit}>완료</AdminButton>
		</>
	);
}
