import { ResponsePaper } from '../../../@types/api/paper';
import { EditPageInnerShellProps, ViewPageProps } from '../../../@types/pages';
import { useState, useEffect } from 'react';
import useGet from '../../../hooks/useGet';
import { getPaperById, putPaper } from '../../../api/paper';
import useInput from '../../../hooks/useInput';
import useKeywords from '../../../hooks/useKeywords';
import { Paths } from '../../../constants/paths';
import useRoute from '../../../hooks/useRoute';
import PaperNewEdit from './PaperNewEdit';

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
			<PaperNewEdit
				title={title}
				year={year}
				keywords={keywords}
				researcherName={researcherName}
				doi={doi}
				onChangeTitle={onChangeTitle}
				onChangeYear={onChangeYear}
				onChangeKeyword={onChangeKeyword}
				onAddKeyword={onAddKeyword}
				onRemoveKeyword={onRemoveKeyword}
				onChangeResearcherName={onChangeResearcherName}
				onChangeDoi={onChangeDoi}
				onSubmit={onSubmit}
			/>
		</>
	);
}
