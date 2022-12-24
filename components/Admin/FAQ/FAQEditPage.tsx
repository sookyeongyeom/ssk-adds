import { ResponseFAQ } from '../../../@types/api/faq';
import { EditPageInnerShellProps, ViewPageProps } from '../../../@types/pages';
import useInput from '../../../hooks/useInput';
import { putFAQ, getFAQById } from '../../../api/faq';
import { useState, useEffect } from 'react';
import useGet from '../../../hooks/useGet';
import Input from '../../Element/Shared/Input';
import AdminButton from '../../Element/Admin/AdminButton';

export default function FAQEditPage({ id }: ViewPageProps) {
	const [faq, setFaq] = useState<ResponseFAQ.GetById>();

	useEffect(() => {
		if (id !== undefined) useGet(() => getFAQById({ id }), setFaq);
	}, [id]);

	return <>{faq && <FAQEditPageInnerShell id={id} data={faq} />}</>;
}

function FAQEditPageInnerShell({
	id,
	data,
}: Omit<EditPageInnerShellProps<ResponseFAQ.GetById>, 'path'>) {
	const { value: title, onChange: onChangeTitle } = useInput(data?.title);
	const { value: writer, onChange: onChangeWriter } = useInput(data?.writer);
	const { value: category, onChange: onChangeCategory } = useInput(data?.category);
	const { value: reply, onChange: onChangeReply } = useInput(data?.reply);

	const onSubmit = async () => {
		/* PUT */
		const res = await putFAQ({
			id,
			title,
			writer,
			category,
			reply,
			createdDate: data?.createdDate || new Date().toISOString().split('T')[0],
		});
		console.log(res);
	};

	return (
		<>
			FAQ수정
			<Input label={'제목'} value={title} onChange={onChangeTitle} />
			<Input label={'작성자'} value={writer} onChange={onChangeWriter} />
			<Input label={'분류'} value={category} onChange={onChangeCategory} />
			<Input label={'답변'} value={reply} onChange={onChangeReply} />
			<AdminButton onClick={onSubmit}>완료</AdminButton>
		</>
	);
}
