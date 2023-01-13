import { SC } from '../../../styles/styled';
import AdminNewEdit from '../../Element/Admin/AdminNewEdit';
import Input from '../../Element/Shared/Input';
import { MutableRefObject, useRef } from 'react';
import useValidation from '../../../hooks/useValidation';
import Required from '../../Element/Admin/Required';
import styled from 'styled-components';
import { Colors } from '../../../styles/colors';
import { Fonts } from '../../../styles/fonts';

export default function ContactEdit({
	email,
	phoneNumbers,
	wayToLab,
	onChangeEmail,
	onChangeName,
	onChangePhoneNumber,
	onChangeWayToLab,
	onSubmit,
}: ContactEditProps) {
	const emailRef = useRef() as MutableRefObject<HTMLInputElement>;
	const name1Ref = useRef() as MutableRefObject<HTMLInputElement>;
	const phoneNumber1Ref = useRef() as MutableRefObject<HTMLInputElement>;
	const name2Ref = useRef() as MutableRefObject<HTMLInputElement>;
	const phoneNumber2Ref = useRef() as MutableRefObject<HTMLInputElement>;
	const name3Ref = useRef() as MutableRefObject<HTMLInputElement>;
	const phoneNumber3Ref = useRef() as MutableRefObject<HTMLInputElement>;
	const wayToLabRef = useRef() as MutableRefObject<HTMLInputElement>;

	const required = [
		{ value: email, name: '이메일', ref: emailRef },
		{ value: phoneNumbers[0].name, name: '첫번째 연락처 이름', ref: name1Ref },
		{ value: phoneNumbers[0].phoneNumber, name: '첫번째 연락처 번호', ref: phoneNumber1Ref },
		{ value: phoneNumbers[1].name, name: '두번째 연락처 이름', ref: name2Ref },
		{ value: phoneNumbers[1].phoneNumber, name: '두번째 연락처 번호', ref: phoneNumber2Ref },
		{ value: phoneNumbers[2].name, name: '세번째 연락처 이름', ref: name3Ref },
		{ value: phoneNumbers[2].phoneNumber, name: '세번째 연락처 번호', ref: phoneNumber3Ref },
		{ value: wayToLab, name: '위치', ref: wayToLabRef },
	];

	const onValidation = useValidation(onSubmit, required);

	return (
		/* prettier-ignore */
		<AdminNewEdit onSubmit={onValidation}>
			<SC.Label>이메일<Required/></SC.Label>
			<Input value={email} onChange={onChangeEmail} inputRef={emailRef} />
			<SC.Label>연락처<Required/></SC.Label>
			<S.TelephoneWrapper>
				<S.Index>1</S.Index>
				<Input value={phoneNumbers[0].name} onChange={(e) => onChangeName(e, 0)} inputRef={name1Ref} placeholder={'이름'}  />
				<Input value={phoneNumbers[0].phoneNumber} onChange={(e) => onChangePhoneNumber(e, 0)} inputRef={phoneNumber1Ref} placeholder={'010-0000-0000 형식으로 입력해주세요'} maxLength={13} />
				<S.Index>2</S.Index>
				<Input value={phoneNumbers[1].name} onChange={(e) => onChangeName(e, 1)} inputRef={name2Ref} placeholder={'이름'} />
				<Input value={phoneNumbers[1].phoneNumber} onChange={(e) => onChangePhoneNumber(e, 1)} inputRef={phoneNumber2Ref} placeholder={'010-0000-0000 형식으로 입력해주세요'} maxLength={13} />
				<S.Index>3</S.Index>
				<Input value={phoneNumbers[2].name} onChange={(e) => onChangeName(e, 2)} inputRef={name3Ref} placeholder={'이름'}  />
				<Input value={phoneNumbers[2].phoneNumber} onChange={(e) => onChangePhoneNumber(e, 2)} inputRef={phoneNumber3Ref} placeholder={'010-0000-0000 형식으로 입력해주세요'} maxLength={13} />
			</S.TelephoneWrapper>
			<SC.Label>위치<Required/></SC.Label>
			<Input value={wayToLab} onChange={onChangeWayToLab} inputRef={wayToLabRef} />
		</AdminNewEdit>
	);
}

namespace S {
	export const TelephoneWrapper = styled.div`
		display: grid;
		grid-template-columns: max-content max-content max-content;
		gap: 1rem;
		align-items: center;
	`;

	export const Index = styled.div`
		${Fonts.bold12}
		background-color: ${Colors.orange300};
		color: ${Colors.white};
		border-radius: 50%;
		width: 2.2rem;
		height: 2.2rem;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 0.5rem;
	`;
}
