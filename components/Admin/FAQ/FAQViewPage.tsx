import { useState, useEffect } from 'react';
import { ResponseFAQ } from '../../../@types/api/faq';
import { ViewPageProps } from '../../../@types/pages';
import { Paths } from '../../../constants/paths';
import useEditDelete from '../../../hooks/useEditDelete';
import useGet from '../../../hooks/useGet';
import { getFAQById } from '../../../api/faq';
import AdminView from '../../Element/Admin/AdminView';
import { SC } from '../../../styles/styled';

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
				<SC.Label>제목</SC.Label>
				<div>{faq?.title}</div>
				<SC.Label>분류</SC.Label>
				<div>{faq?.category}</div>
				<SC.Label>작성자</SC.Label>
				<div>{faq?.writer}</div>
				<SC.Label>답변</SC.Label>
				<div>{faq?.reply}</div>
			</AdminView>
		</div>
	);
}
