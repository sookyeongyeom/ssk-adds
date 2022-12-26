import { ResponsePaper } from '../../../@types/api/paper';
import { EditPageInnerShellProps, ViewPageProps } from '../../../@types/pages';
import { useState, useEffect } from 'react';
import useGet from '../../../hooks/useGet';
import { getPaperById, putPaper } from '../../../api/paper';
import useInput from '../../../hooks/useInput';
import Input from '../../Element/Shared/Input';
import AdminButton from '../../Element/Admin/AdminButton';
import { SC } from '../../../styles/styled';
import useKeywords from '../../../hooks/useKeywords';
import { Paths } from '../../../constants/paths';
import useRoute from '../../../hooks/useRoute';

export default function PaperEditPage({ id }: ViewPageProps) {
	const [paper, setPaper] = useState<ResponsePaper.GetById>();

	useEffect(() => {
		if (id !== undefined && !isNaN(id)) useGet(() => getPaperById({ id }), setPaper);
	}, [id]);

	return <>{paper && <PaperEditPageInnerShell id={id} data={paper} />}</>;
}

function PaperEditPageInnerShell({
	id,
	data,
}: Omit<EditPageInnerShellProps<ResponsePaper.GetById>, 'path'>) {
	const { value: title, onChange: onChangeTitle } = useInput(data?.title);
	const { value: year, onChange: onChangeYear } = useInput(data?.year);
	const { value: researcherName, onChange: onChangeResearcherName } = useInput(
		data?.researcherName,
	);
	const { value: doi, onChange: onChangeDoi } = useInput(data?.doi);
	const { keywords, onChangeKeyword, onAddKeyword, onRemoveKeyword } = useKeywords(
		data?.keywords.split(','),
	);
	const { onRouteToPath } = useRoute(Paths.admin + Paths.paper + `/${id}`);

	const onSubmit = async () => {
		/* PUT */
		const res = await putPaper({
			id,
			title,
			year,
			keywords: keywords.filter((keyword) => keyword !== '').join(','),
			researcherName,
			doi,
		});
		console.log(res);
		onRouteToPath();
	};

	return (
		<>
			<Input label={'제목'} value={title} onChange={onChangeTitle} />
			<Input label={'작성연도'} value={year} onChange={onChangeYear} />
			<SC.Keywords>
				{keywords.map((keyword, i) => (
					<div key={i}>
						<SC.Keyword value={keyword} onChange={(e) => onChangeKeyword(e, i)} />
						<AdminButton onClick={() => onRemoveKeyword(i)}>삭제</AdminButton>
					</div>
				))}
			</SC.Keywords>
			<AdminButton onClick={onAddKeyword}>키워드 추가</AdminButton>
			<Input label={'연구자'} value={researcherName} onChange={onChangeResearcherName} />
			<Input label={'DOI'} value={doi} onChange={onChangeDoi} />
			<AdminButton onClick={onSubmit}>완료</AdminButton>
		</>
	);
}
