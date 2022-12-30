import { useRef, MutableRefObject } from 'react';
import useValidation from '../../../hooks/useValidation';
import { SC } from '../../../styles/styled';
import AdminNewEdit from '../../Element/Admin/AdminNewEdit';
import Input from '../../Element/Shared/Input';
import Required from '../../Element/Admin/Required';

export default function NewsNewEdit({
	title,
	body,
	url,
	onChangeTitle,
	onChangeBody,
	onChangeUrl,
	onSubmit,
}: NewsNewEditProps) {
	const titleRef = useRef() as MutableRefObject<HTMLInputElement>;
	const bodyRef = useRef() as MutableRefObject<HTMLInputElement>;
	const urlRef = useRef() as MutableRefObject<HTMLInputElement>;

	const required = [
		{ value: title, name: '제목', ref: titleRef },
		{ value: body, name: '내용', ref: bodyRef },
		{ value: url, name: 'Url', ref: urlRef },
	];

	const onValidation = useValidation(onSubmit, required);

	return (
		/* prettier-ignore */
		<AdminNewEdit onSubmit={onValidation}>
			<SC.Label>제목<Required/></SC.Label>
			<Input value={title} onChange={onChangeTitle} inputRef={titleRef} maxLength={50} />
			<SC.Label>내용<Required/></SC.Label>
			<Input value={body} onChange={onChangeBody} inputRef={bodyRef} maxLength={1000} />
			<SC.Label>Url<Required/></SC.Label>
			<Input value={url} onChange={onChangeUrl} inputRef={urlRef} maxLength={200} />
		</AdminNewEdit>
	);
}
