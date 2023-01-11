import styled from 'styled-components';
import { SC } from '../../../styles/styled';
import SelectBox from '../../Element/Adds/SelectBox';
import { useState, useEffect } from 'react';
import { ResponseNews } from '../../../@types/api/news';
import useChangePage from '../../../hooks/useChangePage';
import useGet from '../../../hooks/useGet';
import { getNews } from '../../../api/news';
import PageButton from '../../Element/Shared/PageButton';
import { NewsBoxElementProps } from '../../../@types/adds';
import { Fonts } from '../../../styles/fonts';

export default function NewsPage() {
	const [news, setNews] = useState<ResponseNews.Get>();
	const { page, onChangePage } = useChangePage();

	useEffect(() => {
		useGet(() => getNews({ page }), setNews);
	}, [page]);

	return (
		<SC.PaperNewsPageLayout>
			<SelectBox options={['최신순 정렬']} />
			<div>
				{news &&
					news.items.map((news, i) => (
						<NewsBoxElement
							id={news.id}
							title={news.title}
							body={news.body}
							url={news.url}
							key={i}
						/>
					))}
				<div>
					<PageButton
						currentPage={page}
						totalPosts={news?.total}
						size={news?.size}
						onChangePage={onChangePage}
					/>
				</div>
			</div>
		</SC.PaperNewsPageLayout>
	);
}

function NewsBoxElement({ id, title, body, url }: NewsBoxElementProps) {
	return (
		<SC.PaperNewsBox>
			<h2>{id}</h2>
			<h3>{title}</h3>
			<h4>
				<span>{body}</span>
				<S.UrlHighlight>
					<a href={url}>{url}</a>
				</S.UrlHighlight>
			</h4>
		</SC.PaperNewsBox>
	);
}

namespace S {
	export const UrlHighlight = styled(SC.LinkHighlight)`
		> a {
			${Fonts.medium14}
			cursor: pointer;
			position: relative;
			margin-top: 0.5rem;
		}
	`;
}
