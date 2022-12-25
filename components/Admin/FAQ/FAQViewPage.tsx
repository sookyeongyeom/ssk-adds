import { useState, useEffect } from 'react';
import { ResponseFAQ } from '../../../@types/api/faq';
import { ViewPageProps } from '../../../@types/pages';
import { Paths } from '../../../constants/paths';
import useEditDelete from '../../../hooks/useEditDelete';
import useGet from '../../../hooks/useGet';
import AdminButton from '../../Element/Admin/AdminButton';
import { getFAQById } from '../../../api/faq';
import AdminBoardButton from '../../Element/Shared/AdminBoardButton';

export default function FAQViewPage({ id }: ViewPageProps) {
	const basePath = Paths.admin + Paths.faq;
	const { onEdit, onDelete } = useEditDelete(basePath, id);
	const [faq, setFaq] = useState<ResponseFAQ.GetById>();

	useEffect(() => {
		if (id !== undefined) useGet(() => getFAQById({ id }), setFaq);
	}, [id]);

	return (
		<div>
			<AdminButton onClick={onEdit}>수정</AdminButton>{' '}
			<AdminButton onClick={onDelete}>삭제</AdminButton>
			{faq && (
				<>
					<div>제목:{faq.title}</div>
					<div>작성자:{faq.writer}</div>
					<div>분류:{faq.category}</div>
					<div>답변:{faq.reply}</div>
				</>
			)}
			<AdminBoardButton boardPath={basePath} />
		</div>
	);
}
