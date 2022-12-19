import dynamic from 'next/dynamic';
import { useState } from 'react';
import AdminButton from '../../Shared/AdminButton';
import Input from '../../Shared/Input';
import useInput from '../../../hooks/useInput';
import { postResource } from '../../../api/resource';

const Editor = dynamic(() => import('../../Shared/Editor'), {
	ssr: false,
});

export default function ResourceNewPage() {
	const { value: title, onChange: onChangeTitle } = useInput();
	const { value: writer, onChange: onChangeWriter } = useInput();
	const [body, setBody] = useState('');

	const onChange = (text: string) => setBody(text);

	const onSubmit = async () => {
		const res = await postResource({
			writer,
			title,
			body: body,
			file: '',
			created_date: new Date().toISOString().split('T')[0],
		});
		console.log(res);
	};

	return (
		<>
			새로운자료안내
			<Input label={'제목'} value={title} onChange={onChangeTitle} />
			<Editor value={body} onChange={onChange} />
			<Input label={'관리자'} value={writer} onChange={onChangeWriter} />
			<AdminButton onClick={onSubmit}>완료</AdminButton>
		</>
	);
}
