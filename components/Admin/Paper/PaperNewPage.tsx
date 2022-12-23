import useInput from '../../../hooks/useInput';
import { postPaper } from '../../../api/paper';
import Input from '../../Element/Shared/Input';
import AdminButton from '../../Element/Admin/AdminButton';

export default function PaperNewPage() {
	const { value: title, onChange: onChangeTitle } = useInput();
	const { value: year, onChange: onChangeYear } = useInput();
	const { value: keywords, onChange: onChangeKeywords } = useInput();
	const { value: researcherName, onChange: onChangeResearcherName } = useInput();
	const { value: doi, onChange: onChangeDoi } = useInput();

	const onSubmit = async () => {
		/* POST */
		const res = await postPaper({
			title,
			year,
			keywords,
			researcherName,
			doi,
		});
		console.log(res);
	};

	return (
		<>
			새로운데이터활용논문
			<Input label={'제목'} onChange={onChangeTitle} />
			<Input label={'작성연도'} onChange={onChangeYear} />
			<Input label={'키워드'} onChange={onChangeKeywords} />
			<Input label={'연구자'} onChange={onChangeResearcherName} />
			<Input label={'DOI'} onChange={onChangeDoi} />
			<AdminButton onClick={onSubmit}>완료</AdminButton>
		</>
	);
}
