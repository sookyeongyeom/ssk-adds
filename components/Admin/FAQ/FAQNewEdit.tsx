import AdminNewEdit from '../../Element/Admin/AdminNewEdit';
import Input from '../../Element/Shared/Input';

export default function FAQNewEdit({
	title,
	writer,
	category,
	reply,
	onChangeTitle,
	onChangeWriter,
	onChangeCategory,
	onChangeReply,
	onSubmit,
}: FAQNewEditProps) {
	return (
		<AdminNewEdit onSubmit={onSubmit}>
			<div>제목</div>
			<Input value={title} onChange={onChangeTitle} />
			<div>작성자</div>
			<Input value={writer} onChange={onChangeWriter} />
			<div>분류</div>
			<Input value={category} onChange={onChangeCategory} />
			<div>답변</div>
			<Input value={reply} onChange={onChangeReply} />
		</AdminNewEdit>
	);
}
