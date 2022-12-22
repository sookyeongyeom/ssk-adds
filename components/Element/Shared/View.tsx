import { ResponseResource } from '../../../@types/api/resource';
import { ViewProps } from '../../../@types/shared';
import styled from 'styled-components';
import { Fonts } from '../../../styles/fonts';
import { Colors } from '../../../styles/colors';
import { svgDownload } from '../../../styles/svgs';
import BoardButton from './BoardButton';
import AdjacentNavigator from './AdjacentNavigator';
import { ResponseNotice } from '../../../@types/api/notice';
import Link from 'next/link';
import { getDownloadLinkFromS3 } from '../../../s3';
import { S3Folders } from '../../../constants/s3';

export default function View<T extends ResponseResource.GetById | ResponseNotice.GetById>({
	data,
	boardPath,
	prev,
	next,
	isNotice = false,
}: ViewProps<T>) {
	const folder = isNotice ? S3Folders.notice : S3Folders.resource;
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
						<div>
							{data.file &&
								JSON.parse(data.file).map((file: FileDataType, i: number) => (
									<p key={i}>
										{svgDownload}{' '}
										<Link href={`${getDownloadLinkFromS3(folder, file.key)}`}>{file.name}</Link>
									</p>
								))}
						</div>
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

		p {
			margin: 1rem 0;
		}

		h1 {
			${Fonts.bold32}
		}

		h2 {
			${Fonts.bold28}
		}

		blockquote {
			border-left: 0.5rem solid ${Colors.blue100};
			padding: 0.5rem 1rem;
			margin: 1rem 0;
		}

		iframe {
			width: 56rem;
			height: 31.5rem;
		}

		ul > li {
			list-style-type: disc;
		}

		ol > li {
			list-style-type: decimal;
		}

		li {
			line-height: 120%;
		}
	`;

	export const File = styled.div<ViewLayoutProps>`
		background-color: ${(props) => (props.isNotice ? '' : Colors.blue100)};
		border-top: ${(props) => (props.isNotice ? `0.1rem solid ${Colors.gray150}` : '')};
		border-bottom: ${(props) => (props.isNotice ? `0.1rem solid ${Colors.gray150}` : '')};
		min-height: 4.9rem;
		padding: 1.5rem 3rem;
		display: flex;
		align-items: flex-start;
		gap: 3rem;
		margin-bottom: 9.1rem;

		> h3 {
			${Fonts.medium16}
		}

		> div {
			display: flex;
			flex-direction: column;
			gap: 1rem;

			> p {
				display: flex;
				gap: 0.5rem;
				cursor: pointer;
				transition: 0.5s ease;

				> svg > path {
					transition: 0.5s ease;
				}

				&:hover {
					color: ${Colors.blue300};

					> svg > path {
						fill: ${Colors.blue300};
					}
				}
			}
		}
	`;
}
