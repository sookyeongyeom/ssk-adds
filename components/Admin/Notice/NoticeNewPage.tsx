import useInput from '../../../hooks/useInput';
import useEditorBody from '../../../hooks/useEditorBody';
import NewEditorPost from '../../Shared/NewEditorPost';
import { postNotice } from '../../../api/notice';

export default function NoticeNewPage() {
	const { value: title, onChange: onChangeTitle } = useInput();
	const { value: writer, onChange: onChangeWriter } = useInput();
	const { body, onChangeBody } = useEditorBody();

	const onSubmit = async () => {
		const res = await postNotice({
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
			새로운공지사항
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
