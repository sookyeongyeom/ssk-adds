import { SC } from '../../../styles/styled';
import AdminNewEdit from '../../Element/Admin/AdminNewEdit';
import Input from '../../Element/Shared/Input';

export default function PublicationNewEdit({
	children,
	title,
	writer,
	onChangeTitle,
	onChangeWriter,
	onSubmit,
}: PublicationNewEditProps) {
	return (
		<AdminNewEdit onSubmit={onSubmit}>
			<SC.Label>제목</SC.Label>
			<Input value={title} onChange={onChangeTitle} />
			<SC.Label>작성자</SC.Label>
			<Input value={writer} onChange={onChangeWriter} />
			{children}
		</AdminNewEdit>
	);
}
