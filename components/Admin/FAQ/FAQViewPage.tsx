import { useState, useEffect } from 'react';
import { ResponseFAQ } from '../../../@types/api/faq';
import { ViewPageProps } from '../../../@types/pages';
import { Paths } from '../../../constants/paths';
import useEditDelete from '../../../hooks/useEditDelete';
import useGet from '../../../hooks/useGet';
import { getFAQById } from '../../../api/faq';
import AdminView from '../../Element/Admin/AdminView';

export default function FAQViewPage({ id }: ViewPageProps) {
	const basePath = Paths.admin + Paths.faq;
	const { onEdit, onDelete } = useEditDelete(basePath, id);
	const [faq, setFaq] = useState<ResponseFAQ.GetById>();

	useEffect(() => {
		if (id !== undefined && !isNaN(id)) useGet(() => getFAQById({ id }), setFaq);
	}, [id]);

	return (
		<div>
			<AdminView id={id} basePath={basePath} onEdit={onEdit} onDelete={onDelete}>
				<div>제목</div>
				<div>{faq?.title}</div>
				<div>분류</div>
				<div>{faq?.category}</div>
				<div>작성자</div>
				<div>{faq?.writer}</div>
				<div>답변</div>
				<div>{faq?.reply}</div>
			</AdminView>
		</div>
	);
}
