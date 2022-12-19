import useInput from '../../../hooks/useInput';
import { postResource } from '../../../api/resource';
import useEditorBody from '../../../hooks/useEditorBody';
import NewEditorPost from '../../Shared/NewEditorPost';

export default function ResourceNewPage() {
	const { value: title, onChange: onChangeTitle } = useInput();
	const { value: writer, onChange: onChangeWriter } = useInput();
	const { body, onChangeBody } = useEditorBody();

	const onSubmit = async () => {
		const res = await postResource({
			writer,
			title,
			body,
			file: '',
			created_date: new Date().toISOString().split('T')[0],
		});
		console.log(res);
	};

	return (
		<>
			새로운자료안내
			<NewEditorPost
				title={title}
				body={body}
				writer={writer}
				onChangeTitle={onChangeTitle}
				onChangeWriter={onChangeWriter}
				onChangeBody={onChangeBody}
				onSubmit={onSubmit}
			/>
		</>
	);
}
