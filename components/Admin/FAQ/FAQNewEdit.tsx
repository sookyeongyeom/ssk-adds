import { SC } from '../../../styles/styled';
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
			<SC.Label>제목</SC.Label>
			<Input value={title} onChange={onChangeTitle} />
			<SC.Label>작성자</SC.Label>
			<Input value={writer} onChange={onChangeWriter} />
			<SC.Label>분류</SC.Label>
			<Input value={category} onChange={onChangeCategory} />
			<SC.Label>답변</SC.Label>
			<Input value={reply} onChange={onChangeReply} />
		</AdminNewEdit>
	);
}
