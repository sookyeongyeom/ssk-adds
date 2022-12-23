import useInput from '../../../hooks/useInput';
import { postPaper } from '../../../api/paper';
import Input from '../../Element/Shared/Input';
import AdminButton from '../../Element/Admin/AdminButton';
import { SC } from '../../../styles/styled';
import useKeywords from '../../../hooks/useKeywords';

export default function PaperNewPage() {
	const { value: title, onChange: onChangeTitle } = useInput();
	const { value: year, onChange: onChangeYear } = useInput();
	const { value: researcherName, onChange: onChangeResearcherName } = useInput();
	const { value: doi, onChange: onChangeDoi } = useInput();
	const { keywords, onChangeKeyword, onAddKeyword, onRemoveKeyword } = useKeywords();

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
	};

	return (
		<>
			새로운데이터활용논문
			<Input label={'제목'} onChange={onChangeTitle} />
			<Input label={'작성연도'} onChange={onChangeYear} />
			<SC.Keywords>
				{keywords.map((keyword, i) => (
					<div key={i}>
						<SC.Keyword value={keyword} onChange={(e) => onChangeKeyword(e, i)} />
						<AdminButton onClick={() => onRemoveKeyword(i)}>삭제</AdminButton>
					</div>
				))}
			</SC.Keywords>
			<AdminButton onClick={onAddKeyword}>키워드 추가</AdminButton>
			<Input label={'연구자'} onChange={onChangeResearcherName} />
			<Input label={'DOI'} onChange={onChangeDoi} />
			<AdminButton onClick={onSubmit}>완료</AdminButton>
		</>
	);
}
