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
			<div>제목</div>
			<Input value={title} onChange={onChangeTitle} />
			<div>내용</div>
			<Input value={body} onChange={onChangeBody} />
			<div>Url</div>
			<Input value={url} onChange={onChangeUrl} />
		</AdminNewEdit>
	);
}
