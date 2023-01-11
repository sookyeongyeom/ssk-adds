import { SC } from '../../../styles/styled';
import AdminNewEdit from '../../Element/Admin/AdminNewEdit';
import Input from '../../Element/Shared/Input';
import { MutableRefObject, useRef } from 'react';
import useValidation from '../../../hooks/useValidation';
import Required from '../../Element/Admin/Required';

export default function ContactEdit({
	email,
	phoneNumber,
	wayToLab,
	onChangeEmail,
	onChangePhoneNumber,
	onChangeWayToLab,
	onSubmit,
}: ContactEditProps) {
	const emailRef = useRef() as MutableRefObject<HTMLInputElement>;
	const phoneNumberRef = useRef() as MutableRefObject<HTMLInputElement>;
	const wayToLabRef = useRef() as MutableRefObject<HTMLInputElement>;

	const required = [
		{ value: email, name: '이메일', ref: emailRef },
		{ value: phoneNumber, name: '연락처', ref: phoneNumberRef },
		{ value: wayToLab, name: '위치', ref: wayToLabRef },
	];

	const onValidation = useValidation(onSubmit, required);

	return (
		/* prettier-ignore */
		<AdminNewEdit onSubmit={onValidation}>
			<SC.Label>이메일<Required/></SC.Label>
			<Input value={email} onChange={onChangeEmail} inputRef={emailRef} />
			<SC.Label>연락처<Required/></SC.Label>
			<Input value={phoneNumber} onChange={onChangePhoneNumber} inputRef={phoneNumberRef} maxLength={13} />
			<SC.Label>위치<Required/></SC.Label>
			<Input value={wayToLab} onChange={onChangeWayToLab} inputRef={wayToLabRef} />
		</AdminNewEdit>
	);
}
