import { ResponseResource } from '../../@types/api/resource';
import { ViewProps } from '../../@types/shared';
import styled from 'styled-components';
import { Fonts } from '../../styles/fonts';
import { Colors } from '../../styles/colors';
import { svgDownload } from '../../styles/svgs';
import BoardButton from './BoardButton';
import AdjacentNavigator from './AdjacentNavigator';
import { ResponseNotice } from '../../@types/api/notice';

export default function View<T extends ResponseResource.GetById | ResponseNotice.GetById>({
	data,
	boardPath,
	prev,
	next,
	isNotice = false,
}: ViewProps<T>) {
	return (
		<S.ViewLayout>
			{data && (
				<>
					<S.Meta isNotice={isNotice}>
						<h1>{data.title}</h1>
						<h2>
							{data.id}&ensp;|&ensp;{data.writer}&ensp;|&ensp;{data.created_date}
						</h2>
					</S.Meta>
					<S.Content dangerouslySetInnerHTML={{ __html: data.body }} />
					<S.File isNotice={isNotice}>
						<h3>첨부파일</h3>
						{data.file && (
							<p>
								{svgDownload} {data.file}
							</p>
						)}
					</S.File>
					<BoardButton boardPath={boardPath} />
					<AdjacentNavigator prev={prev} next={next} />
				</>
			)}
		</S.ViewLayout>
	);
}

namespace S {
	export const ViewLayout = styled.div``;

	export const Meta = styled.div<ViewLayoutProps>`
		padding: 2.5rem 1.3rem;
		padding-top: 3.5rem;
		border-bottom: ${(props) => (props.isNotice ? '' : `0.1rem solid ${Colors.gray150}`)};
		background-color: ${(props) => (props.isNotice ? Colors.blue100 : '')};

		> h1 {
			${Fonts.medium24}
			text-align: center;
		}

		> h2 {
			${Fonts.light12}
			text-align: right;
		}
	`;

	export const Content = styled.pre`
		padding: 5.8rem 3rem;
	`;

	export const File = styled.div<ViewLayoutProps>`
		background-color: ${(props) => (props.isNotice ? '' : Colors.blue100)};
		border-top: ${(props) => (props.isNotice ? `0.1rem solid ${Colors.gray150}` : '')};
		border-bottom: ${(props) => (props.isNotice ? `0.1rem solid ${Colors.gray150}` : '')};
		height: 5.5rem;
		padding: 0 3rem;
		display: flex;
		align-items: center;
		gap: 3rem;
		margin-bottom: 9.1rem;

		> h3 {
			${Fonts.medium16}
		}

		> p {
			display: flex;
			gap: 0.5rem;
			cursor: pointer;
		}
	`;
}
