import useInput from '../../../hooks/useInput';
import { postFAQ } from '../../../api/faq';
import Input from '../../Element/Shared/Input';
import AdminButton from '../../Element/Admin/AdminButton';
import { Paths } from '../../../constants/paths';
import useRoute from '../../../hooks/useRoute';

export default function FAQNewPage() {
	const { value: title, onChange: onChangeTitle } = useInput();
	const { value: writer, onChange: onChangeWriter } = useInput();
	const { value: category, onChange: onChangeCategory } = useInput();
	const { value: reply, onChange: onChangeReply } = useInput();
	const { onRouteToPath } = useRoute(Paths.admin + Paths.faq);

	const onSubmit = async () => {
		/* POST */
		const res = await postFAQ({
			title,
			writer,
			category,
			reply,
			createdDate: new Date().toISOString().split('T')[0],
		});
		console.log(res);
		onRouteToPath();
	};

	return (
		<>
			<Input label={'제목'} onChange={onChangeTitle} />
			<Input label={'작성자'} onChange={onChangeWriter} />
			<Input label={'분류'} onChange={onChangeCategory} />
			<Input label={'답변'} onChange={onChangeReply} />
			<AdminButton onClick={onSubmit}>완료</AdminButton>
		</>
	);
}
