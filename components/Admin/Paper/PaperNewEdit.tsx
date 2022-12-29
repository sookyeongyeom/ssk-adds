import styled from 'styled-components';
import { SC } from '../../../styles/styled';
import AdminButton from '../../Element/Admin/AdminButton';
import AdminNewEdit from '../../Element/Admin/AdminNewEdit';
import Input from '../../Element/Shared/Input';
import { svgPlus } from '../../../styles/svgs';

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
	return (
		<AdminNewEdit onSubmit={onSubmit}>
			<SC.Label>제목</SC.Label>
			<Input value={title} onChange={onChangeTitle} />
			<SC.Label>작성연도</SC.Label>
			<Input value={year} onChange={onChangeYear} />
			<SC.Label>키워드</SC.Label>
			<S.Keywords>
				{keywords.map((keyword, i) => (
					<div key={i}>
						<Input value={keyword} onChange={(e) => onChangeKeyword(e, i)} />
						<AdminButton onClick={() => onRemoveKeyword(i)} isRed>
							삭제
						</AdminButton>
					</div>
				))}
				<AdminButton onClick={onAddKeyword} isOrange>
					{svgPlus}
				</AdminButton>
			</S.Keywords>
			<SC.Label>연구자</SC.Label>
			<Input value={researcherName} onChange={onChangeResearcherName} />
			<SC.Label>DOI</SC.Label>
			<Input value={doi} onChange={onChangeDoi} />
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
