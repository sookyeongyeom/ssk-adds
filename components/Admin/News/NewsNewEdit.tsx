import { SC } from '../../../styles/styled';
import AdminNewEdit from '../../Element/Admin/AdminNewEdit';
import Input from '../../Element/Shared/Input';

export default function NewsNewEdit({
	title,
	body,
	url,
	onChangeTitle,
	onChangeBody,
	onChangeUrl,
	onSubmit,
}: NewsNewEditProps) {
	return (
		<AdminNewEdit onSubmit={onSubmit}>
			<SC.Label>제목</SC.Label>
			<Input value={title} onChange={onChangeTitle} />
			<SC.Label>내용</SC.Label>
			<Input value={body} onChange={onChangeBody} />
			<SC.Label>Url</SC.Label>
			<Input value={url} onChange={onChangeUrl} />
		</AdminNewEdit>
	);
}
