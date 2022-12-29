import useInput from '../../../hooks/useInput';
import { postFAQ } from '../../../api/faq';
import { Paths } from '../../../constants/paths';
import useRoute from '../../../hooks/useRoute';
import FAQNewEdit from './FAQNewEdit';

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
			<FAQNewEdit
				title={title}
				writer={writer}
				category={category}
				reply={reply}
				onChangeTitle={onChangeTitle}
				onChangeWriter={onChangeWriter}
				onChangeCategory={onChangeCategory}
				onChangeReply={onChangeReply}
				onSubmit={onSubmit}
			/>
		</>
	);
}
