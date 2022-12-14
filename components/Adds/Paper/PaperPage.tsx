import styled from 'styled-components';
import { Fonts } from '../../../styles/fonts';
import { Colors } from '../../../styles/colors';
import { useState, useEffect } from 'react';
import { ResponsePaper } from '../../../@types/api/paper';
import useGet from '../../../hooks/useGet';
import { getPaper } from '../../../api/paper';
import SelectBox from '../../Element/Adds/SelectBox';
import useChangePage from '../../../hooks/useChangePage';
import PageButton from '../../Element/Shared/PageButton';
import { Sizes } from '../../../styles/sizes';
import { SC } from '../../../styles/styled';
import { PaperBoxElementProps } from '../../../@types/adds';
import { Devices } from '../../../styles/devices';

export default function PaperPage() {
	const [paper, setPaper] = useState<ResponsePaper.Get>();
	const { page, onChangePage } = useChangePage();

	useEffect(() => {
		useGet(() => getPaper({ page }), setPaper);
	}, [page]);

	return (
		<S.PaperPageLayout>
			<SelectBox options={['최신순 정렬']} />
			<div>
				{paper ? (
					paper.items.map((paper, i) => (
						<PaperBoxElement
							id={paper.id}
							title={paper.title}
							year={paper.year}
							keywords={paper.keywords}
							researcherName={paper.researcherName}
							doi={paper.doi}
							key={i}
						/>
					))
				) : (
					<PaperBoxElement
						id={1}
						title={
							'유아기 어머니의 양육스트레스, 모-자녀 상호작용 활동 및 양육행동과 유아의 학습준비도가 학령진입기 아동의 학업수행능력에 미치는 영향'
						}
						year={'2018'}
						keywords={'키워드,논문 키워드,길어지면,아랫줄로 내려가게,딱 요정도 넓이 내'}
						researcherName={'홍길동, 홍길동'}
						doi={'https://doi.org/00.0000/j.aip.2017.10.007'}
					/>
				)}
				<div>
					<PageButton
						currentPage={page}
						totalPosts={paper?.total}
						size={paper?.size}
						onChangePage={onChangePage}
					/>
				</div>
			</div>
		</S.PaperPageLayout>
	);
}

function PaperBoxElement({ id, title, year, keywords, researcherName, doi }: PaperBoxElementProps) {
	return (
		<S.PaperBox>
			<h2>{id}</h2>
			<h3>{title}</h3>
			<h4>
				{researcherName}&ensp;|&ensp;{year}&ensp;|&ensp;{doi}
			</h4>
			<ul>
				{!!keywords.length && keywords.split(',').map((keyword, i) => <li key={i}>{keyword}</li>)}
			</ul>
		</S.PaperBox>
	);
}

namespace S {
	export const PaperPageLayout = styled.div`
		${SC.AlignSelectBoxForBoard}

		>div:nth-of-type(2) {
			display: flex;
			flex-direction: column;
			gap: 4rem;
			margin-top: 2rem;

			> div:last-of-type {
				margin-top: calc(${Sizes.desktopPageButtonMarginTop} - 4rem);
			}
		}
	`;

	export const PaperBox = styled.div`
		display: grid;
		grid-template-columns: 3rem 64rem 1fr;
		column-gap: 1rem;
		row-gap: 0.4rem;
		z-index: -10;

		> h2 {
			${Fonts.medium18}
			color:${Colors.blue300};
			position: relative;
			top: 0.3rem;
		}

		> h3 {
			${Fonts.medium16}
			line-height:140%
		}

		> h4 {
			${Fonts.light14}
			line-height: 140%;
			grid-row: 2/2;
			grid-column: 2/3;
		}

		> ul {
			grid-row: 1/4;
			grid-column: 3/4;
			position: relative;
			top: -0.5rem;
			margin-left: 0.8rem;

			> li {
				${Fonts.regular14}
				background-color: ${Colors.blue275};
				color: ${Colors.white};
				border-radius: 1.3rem;
				padding: 0.6rem 1.1rem;
				padding-bottom: 0.7rem;
				width: fit-content;
				display: inline-block;
				margin: 0.4rem;
			}
		}

		@media ${Devices.mobile} {
			grid-template-columns: 3rem 1fr;
			row-gap: 0.5rem;

			> h2 {
				text-align: center;
			}

			> h4 {
				grid-column: 2/4;
			}

			> ul {
				top: 0;
				margin: 0;
				margin-top: 0.3rem;
				grid-row: 3/4;
				grid-column: 2/4;
				display: flex;
				align-items: center;
				flex-wrap: wrap;
				gap: 0.8rem 1rem;

				> li {
					margin: 0;
				}
			}
		}
	`;
}
