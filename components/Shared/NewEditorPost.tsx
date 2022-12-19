import dynamic from 'next/dynamic';
import { NewEditorPostProps } from '../../@types/shared';
import AdminButton from './AdminButton';
import Input from './Input';

const Editor = dynamic(() => import('./Editor'), {
	ssr: false,
});

export default function NewEditorPost({
	title,
	writer,
	body,
	onChangeTitle,
	onChangeWriter,
	onChangeBody,
	onSubmit,
}: NewEditorPostProps) {
	return (
		<>
			<Input label={'제목'} value={title} onChange={onChangeTitle} />
			<Editor value={body} onChange={onChangeBody} />
			<Input label={'관리자'} value={writer} onChange={onChangeWriter} />
			<AdminButton onClick={onSubmit}>완료</AdminButton>
		</>
	);
}
