import { useRef, MutableRefObject } from 'react';
import useValidation from '../../../hooks/useValidation';
import { SC } from '../../../styles/styled';
import AdminNewEdit from '../../Element/Admin/AdminNewEdit';
import Input from '../../Element/Shared/Input';
import Required from '../../Element/Admin/Required';

export default function PublicationNewEdit({
	children,
	title,
	writer,
	onChangeTitle,
	onChangeWriter,
	onSubmit,
}: PublicationNewEditProps) {
	const titleRef = useRef() as MutableRefObject<HTMLInputElement>;
	const writerRef = useRef() as MutableRefObject<HTMLInputElement>;

	const required = [
		{ value: title, name: '제목', ref: titleRef },
		{ value: writer, name: '작성자', ref: writerRef },
	];

	const onValidation = useValidation(onSubmit, required);

	return (
		/* prettier-ignore */
		<AdminNewEdit onSubmit={onValidation}>
			<SC.Label>제목<Required/></SC.Label>
			<Input value={title} onChange={onChangeTitle} inputRef={titleRef} maxLength={50} />
			<SC.Label>작성자<Required/></SC.Label>
			<Input value={writer} onChange={onChangeWriter} inputRef={writerRef} maxLength={15} />
			{children}
		</AdminNewEdit>
	);
}
