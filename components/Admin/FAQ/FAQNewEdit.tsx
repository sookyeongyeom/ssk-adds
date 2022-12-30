import { SC } from '../../../styles/styled';
import AdminNewEdit from '../../Element/Admin/AdminNewEdit';
import Input from '../../Element/Shared/Input';
import { MutableRefObject, useRef } from 'react';
import useValidation from '../../../hooks/useValidation';
import Required from '../../Element/Admin/Required';

export default function FAQNewEdit({
	title,
	writer,
	category,
	reply,
	onChangeTitle,
	onChangeWriter,
	onChangeCategory,
	onChangeReply,
	onSubmit,
}: FAQNewEditProps) {
	const titleRef = useRef() as MutableRefObject<HTMLInputElement>;
	const writerRef = useRef() as MutableRefObject<HTMLInputElement>;
	const categoryRef = useRef() as MutableRefObject<HTMLInputElement>;
	const replyRef = useRef() as MutableRefObject<HTMLInputElement>;

	const required = [
		{ value: title, name: '제목', ref: titleRef },
		{ value: writer, name: '작성자', ref: writerRef },
		{ value: category, name: '분류', ref: categoryRef },
		{ value: reply, name: '답변', ref: replyRef },
	];

	const onValidation = useValidation(onSubmit, required);

	return (
		/* prettier-ignore */
		<AdminNewEdit onSubmit={onValidation}>
			<SC.Label>제목<Required/></SC.Label>
			<Input value={title} onChange={onChangeTitle} inputRef={titleRef} maxLength={100} />
			<SC.Label>작성자<Required/></SC.Label>
			<Input value={writer} onChange={onChangeWriter} inputRef={writerRef} maxLength={15} />
			<SC.Label>분류<Required/></SC.Label>
			<Input value={category} onChange={onChangeCategory} inputRef={categoryRef} />
			<SC.Label>답변<Required/></SC.Label>
			<Input value={reply} onChange={onChangeReply} inputRef={replyRef} maxLength={300} />
		</AdminNewEdit>
	);
}
