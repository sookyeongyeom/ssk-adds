import styled from 'styled-components';
import { Fonts } from '../../../styles/fonts';
import { Colors } from '../../../styles/colors';
import { useState, useEffect } from 'react';
import { ResponsePaper } from '../../../@types/api/paper';
import useGet from '../../../hooks/useGet';
import { getPaper } from '../../../api/paper';

export default function PaperPage() {
	const [paper, setPaper] = useState<ResponsePaper.Get>();

	useEffect(() => {
		useGet(() => getPaper({ page: 1 }), setPaper);
	}, []);

	return (
		<S.PaperPageLayout>
			{paper ? (
				paper.items.map((paper, i) => (
					<PaperBoxElement
						id={paper.id}
						title={paper.title}
						year={paper.year}
						keywords={paper.keywords}
						researcherName={paper.researcher_name}
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
				{keywords.split(',').map((keyword, i) => (
					<li key={i}>{keyword}</li>
				))}
			</ul>
		</S.PaperBox>
	);
}

namespace S {
	export const PaperPageLayout = styled.div`
		display: flex;
		flex-direction: column;
		gap: 3rem;
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
	`;
}
