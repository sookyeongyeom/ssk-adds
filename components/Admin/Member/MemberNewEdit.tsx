import { useRef, MutableRefObject } from 'react';
import useValidation from '../../../hooks/useValidation';
import { SC } from '../../../styles/styled';
import AdminNewEdit from '../../Element/Admin/AdminNewEdit';
import Input from '../../Element/Shared/Input';
import Required from '../../Element/Admin/Required';

export default function MemberNewEdit({
	children,
	name,
	email,
	homepage,
	phoneNumber,
	introBody,
	jobTitle,
	responsibility,
	onChangeName,
	onChangeEmail,
	onChangeHomepage,
	onChangePhoneNumber,
	onChangeIntroBody,
	onChangeJobTitle,
	onChangeResponsibility,
	onSubmit,
}: MemberNewEditProps) {
	const nameRef = useRef() as MutableRefObject<HTMLInputElement>;
	const emailRef = useRef() as MutableRefObject<HTMLInputElement>;
	const introBodyRef = useRef() as MutableRefObject<HTMLInputElement>;
	const jobTitleRef = useRef() as MutableRefObject<HTMLInputElement>;
	const responsibilityRef = useRef() as MutableRefObject<HTMLInputElement>;

	const required = [
		{ value: name, name: '이름', ref: nameRef },
		{ value: email, name: '이메일', ref: emailRef },
		{ value: introBody, name: '소개', ref: introBodyRef },
		{ value: jobTitle, name: '직무', ref: jobTitleRef },
		{ value: responsibility, name: '역할', ref: responsibilityRef },
	];

	const onValidation = useValidation(onSubmit, required);

	return (
		/* prettier-ignore */
		<AdminNewEdit onSubmit={onValidation}>
			<SC.Label>이름<Required/></SC.Label>
			<Input value={name} onChange={onChangeName} inputRef={nameRef} maxLength={30} />
			<SC.Label>이메일<Required/></SC.Label>
			<Input value={email} onChange={onChangeEmail} inputRef={emailRef} maxLength={50} />
			<SC.Label>홈페이지</SC.Label>
			<Input value={homepage} onChange={onChangeHomepage} maxLength={100} />
			<SC.Label>연락처</SC.Label>
			<Input value={phoneNumber} onChange={onChangePhoneNumber} placeholder={'010-0000-0000 형식으로 입력해주세요'} maxLength={13} />
			<SC.Label>소개<Required/></SC.Label>
			<Input value={introBody} onChange={onChangeIntroBody} inputRef={introBodyRef} maxLength={200} />
			<SC.Label>직무<Required/></SC.Label>
			<Input value={jobTitle} onChange={onChangeJobTitle} inputRef={jobTitleRef} maxLength={200} />
			<SC.Label>역할<Required/></SC.Label>
			<Input value={responsibility} onChange={onChangeResponsibility} inputRef={responsibilityRef} maxLength={30} />
			{children}
		</AdminNewEdit>
	);
}
