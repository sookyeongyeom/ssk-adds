import { SC } from '../../../styles/styled';
import AdminNewEdit from '../../Element/Admin/AdminNewEdit';
import Input from '../../Element/Shared/Input';

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
	return (
		<AdminNewEdit onSubmit={onSubmit}>
			<SC.Label>이름</SC.Label>
			<Input value={name} onChange={onChangeName} />
			<SC.Label>이메일</SC.Label>
			<Input value={email} onChange={onChangeEmail} />
			<SC.Label>홈페이지</SC.Label>
			<Input value={homepage} onChange={onChangeHomepage} />
			<SC.Label>연락처</SC.Label>
			<Input value={phoneNumber} onChange={onChangePhoneNumber} />
			<SC.Label>소개</SC.Label>
			<Input value={introBody} onChange={onChangeIntroBody} />
			<SC.Label>직무</SC.Label>
			<Input value={jobTitle} onChange={onChangeJobTitle} />
			<SC.Label>역할</SC.Label>
			<Input value={responsibility} onChange={onChangeResponsibility} />
			{children}
		</AdminNewEdit>
	);
}
