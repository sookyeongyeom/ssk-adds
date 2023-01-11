import { useState, useEffect } from 'react';
import { ResponsePaper } from '../../../@types/api/paper';
import useGet from '../../../hooks/useGet';
import { getPaper } from '../../../api/paper';
import SelectBox from '../../Element/Adds/SelectBox';
import useChangePage from '../../../hooks/useChangePage';
import PageButton from '../../Element/Shared/PageButton';
import { SC } from '../../../styles/styled';
import { PaperBoxElementProps } from '../../../@types/adds';

export default function PaperPage() {
	const [paper, setPaper] = useState<ResponsePaper.Get>();
	const { page, onChangePage } = useChangePage();

	useEffect(() => {
		useGet(() => getPaper({ page }), setPaper);
	}, [page]);

	return (
		<SC.PaperNewsPageLayout>
			<SelectBox options={['최신순 정렬']} />
			<div>
				{paper &&
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
					))}
				<div>
					<PageButton
						currentPage={page}
						totalPosts={paper?.total}
						size={paper?.size}
						onChangePage={onChangePage}
					/>
				</div>
			</div>
		</SC.PaperNewsPageLayout>
	);
}

function PaperBoxElement({ id, title, year, keywords, researcherName, doi }: PaperBoxElementProps) {
	return (
		<SC.PaperNewsBox>
			<h2>{id}</h2>
			<h3>{title}</h3>
			<h4>
				{researcherName}&ensp;|&ensp;{year}&ensp;|&ensp;{doi}
			</h4>
			<ul>
				{!!keywords.length && keywords.split(',').map((keyword, i) => <li key={i}>{keyword}</li>)}
			</ul>
		</SC.PaperNewsBox>
	);
}
