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
			<div>이름</div>
			<Input value={name} onChange={onChangeName} />
			<div>이메일</div>
			<Input value={email} onChange={onChangeEmail} />
			<div>홈페이지</div>
			<Input value={homepage} onChange={onChangeHomepage} />
			<div>연락처</div>
			<Input value={phoneNumber} onChange={onChangePhoneNumber} />
			<div>소개</div>
			<Input value={introBody} onChange={onChangeIntroBody} />
			<div>직무</div>
			<Input value={jobTitle} onChange={onChangeJobTitle} />
			<div>역할</div>
			<Input value={responsibility} onChange={onChangeResponsibility} />
			{children}
		</AdminNewEdit>
	);
}
