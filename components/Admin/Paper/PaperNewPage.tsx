import useInput from '../../../hooks/useInput';
import { postPaper } from '../../../api/paper';
import useKeywords from '../../../hooks/useKeywords';
import { Paths } from '../../../constants/paths';
import useRoute from '../../../hooks/useRoute';
import PaperNewEdit from './PaperNewEdit';

export default function PaperNewPage() {
	const { value: title, onChange: onChangeTitle } = useInput();
	const { value: year, onChange: onChangeYear } = useInput();
	const { value: researcherName, onChange: onChangeResearcherName } = useInput();
	const { value: doi, onChange: onChangeDoi } = useInput();
	const { keywords, onChangeKeyword, onAddKeyword, onRemoveKeyword } = useKeywords();
	const { onRouteToPath } = useRoute(Paths.admin + Paths.paper);

	const onSubmit = async () => {
		/* POST */
		const res = await postPaper({
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
