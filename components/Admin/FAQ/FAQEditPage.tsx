import { ResponseFAQ } from '../../../@types/api/faq';
import { EditPageInnerShellProps, ViewPageProps } from '../../../@types/pages';
import useInput from '../../../hooks/useInput';
import { putFAQ, getFAQById } from '../../../api/faq';
import { useState, useEffect } from 'react';
import useGet from '../../../hooks/useGet';
import useRoute from '../../../hooks/useRoute';
import { Paths } from '../../../constants/paths';
import FAQNewEdit from './FAQNewEdit';

export default function FAQEditPage({ id }: ViewPageProps) {
	const [faq, setFaq] = useState<ResponseFAQ.GetById>();

	useEffect(() => {
		if (id !== undefined && !isNaN(id)) useGet(() => getFAQById({ id }), setFaq);
	}, [id]);

	return <>{faq && <FAQEditPageInnerShell id={id} data={faq} />}</>;
}

function FAQEditPageInnerShell({
	id,
	data,
}: Omit<EditPageInnerShellProps<ResponseFAQ.GetById>, 'path'>) {
	const { value: title, onChange: onChangeTitle } = useInput(data?.title);
	const { value: writer, onChange: onChangeWriter } = useInput(data?.writer);
	const { value: category, onChange: onChangeCategory } = useInput(data?.category);
	const { value: reply, onChange: onChangeReply } = useInput(data?.reply);
	const { onRouteToPath } = useRoute(Paths.admin + Paths.faq + `/${id}`);

	const onSubmit = async () => {
		/* PUT */
		const res = await putFAQ({
			id,
			title,
			writer,
			category,
			reply,
			createdDate: data?.createdDate || new Date().toISOString().split('T')[0],
		});
		console.log(res);
		onRouteToPath();
	};

	return (
		<>
			<FAQNewEdit
				title={title}
				writer={writer}
				category={category}
				reply={reply}
				onChangeTitle={onChangeTitle}
				onChangeWriter={onChangeWriter}
				onChangeCategory={onChangeCategory}
				onChangeReply={onChangeReply}
				onSubmit={onSubmit}
			/>
		</>
	);
}
