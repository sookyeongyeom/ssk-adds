import styled from 'styled-components';
import { SC } from '../../../styles/styled';
import AdminButton from '../../Element/Admin/AdminButton';
import AdminNewEdit from '../../Element/Admin/AdminNewEdit';
import Input from '../../Element/Shared/Input';
import { svgPlus } from '../../../styles/svgs';
import { useRef, MutableRefObject } from 'react';
import useValidation from '../../../hooks/useValidation';
import Required from '../../Element/Admin/Required';

export default function PaperNewEdit({
	title,
	year,
	keywords,
	researcherName,
	doi,
	onChangeTitle,
	onChangeYear,
	onChangeKeyword,
	onAddKeyword,
	onRemoveKeyword,
	onChangeResearcherName,
	onChangeDoi,
	onSubmit,
}: PaperNewEditProps) {
	const titleRef = useRef() as MutableRefObject<HTMLInputElement>;
	const yearRef = useRef() as MutableRefObject<HTMLInputElement>;
	const keywordRef = useRef() as MutableRefObject<HTMLInputElement>;
	const researcherNameRef = useRef() as MutableRefObject<HTMLInputElement>;
	const doiRef = useRef() as MutableRefObject<HTMLInputElement>;

	const required = [
		{ value: title, name: '제목', ref: titleRef },
		{ value: year, name: '작성연도', ref: yearRef },
		{ value: keywords[0], name: '키워드', ref: keywordRef },
		{ value: researcherName, name: '연구자', ref: researcherNameRef },
		{ value: doi, name: 'DOI', ref: doiRef },
	];

	const onValidation = useValidation(onSubmit, required);

	return (
		/* prettier-ignore */
		<AdminNewEdit onSubmit={onValidation}>
			<SC.Label>제목<Required /></SC.Label>
			<Input value={title} onChange={onChangeTitle} inputRef={titleRef} maxLength={200} />
			<SC.Label>작성연도<Required /></SC.Label>
			<Input value={year} onChange={onChangeYear} inputRef={yearRef} maxLength={10} />
			<SC.Label>키워드<Required/></SC.Label>
			<S.Keywords>
				{keywords.map((keyword, i) => (
					<div key={i}>
						<Input value={keyword} onChange={(e) => onChangeKeyword(e, i)} inputRef={!i ? keywordRef : undefined} />
						<AdminButton onClick={() => onRemoveKeyword(i)} isRed>
							삭제
						</AdminButton>
					</div>
				))}
				<AdminButton onClick={onAddKeyword} isOrange>{svgPlus}</AdminButton>
			</S.Keywords>
			<SC.Label>연구자<Required /></SC.Label>
			<Input value={researcherName} onChange={onChangeResearcherName} inputRef={researcherNameRef} maxLength={100} />
			<SC.Label>DOI<Required /></SC.Label>
			<Input value={doi} onChange={onChangeDoi} inputRef={doiRef} maxLength={200} />
		</AdminNewEdit>
	);
}

namespace S {
	export const Keywords = styled.div`
		display: flex;
		flex-direction: column;
		width: fit-content;
		gap: 0.5rem;
		margin-bottom: 1rem;

		> div {
			display: flex;
			gap: 1rem;
		}

		> button {
			width: 4.823rem;
			height: 3.92rem;
			align-self: flex-end;
			position: relative;

			> svg {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-65%, -65%);
			}
		}
	`;
}
