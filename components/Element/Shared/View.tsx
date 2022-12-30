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
import AdminButton from '../Admin/AdminButton';
import useEditDelete from '../../../hooks/useEditDelete';
import { SC } from '../../../styles/styled';
import AdminBoardButton from './AdminBoardButton';
import stringToJson from '../../../utils/stringToJson';

export default function View<T extends ResponseResource.GetById | ResponseNotice.GetById>({
	id,
	data,
	basePath,
	prev,
	next,
	isNotice = false,
	isAdmin = false,
}: ViewProps<T>) {
	if (id === undefined && isAdmin) console.error('isAdmin이지만 id가 제공되지 않았습니다.');
	const folder = isNotice ? S3Folders.notice : S3Folders.resource;
	const parsedFiles = data?.file && stringToJson(data.file);
	const { onEdit, onDelete } = useEditDelete(basePath, id);
	return (
		<>
			{isAdmin && (
				<SC.AlignButtonRight>
					<AdminButton onClick={onEdit}>수정</AdminButton>{' '}
					<AdminButton onClick={onDelete}>삭제</AdminButton>
				</SC.AlignButtonRight>
			)}
			<S.ViewLayout>
				{data && (
					<>
						<S.Meta isNotice={isNotice} isAdmin={isAdmin}>
							<h1>{data.title}</h1>
							<h2>
								{data.id}&ensp;|&ensp;{data.writer}&ensp;|&ensp;{data.createdDate}
							</h2>
						</S.Meta>
						<S.Content dangerouslySetInnerHTML={{ __html: data.body }} />
						<S.File isNotice={isNotice} isAdmin={isAdmin}>
							<h3>첨부파일</h3>
							<div>
								{parsedFiles &&
									parsedFiles.map((file: FileDataType, i: number) => (
										<p key={i}>
											{svgDownload}{' '}
											<Link href={`${getDownloadLinkFromS3(folder, file.key)}`}>{file.name}</Link>
										</p>
									))}
							</div>
						</S.File>
						{isAdmin ? (
							<AdminBoardButton boardPath={basePath} />
						) : (
							<>
								<BoardButton boardPath={basePath} />
								<AdjacentNavigator prev={prev} next={next} />
							</>
						)}
					</>
				)}
			</S.ViewLayout>
		</>
	);
}

namespace S {
	export const ViewLayout = styled.div`
		> button {
			margin-left: auto;
			margin-bottom: 1.8rem;
		}
	`;

	export const Meta = styled.div<ViewLayoutProps>`
		padding: 2.5rem 1.3rem;
		padding-top: 3.5rem;
		border-bottom: ${(props) =>
			props.isNotice && !props.isAdmin ? '' : `0.1rem solid ${Colors.gray150}`};
		background-color: ${(props) => (props.isNotice && !props.isAdmin ? Colors.blue100 : '')};

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
		background-color: ${(props) => props.isAdmin && Colors.blue400};
		border-top: ${(props) =>
			props.isNotice && !props.isAdmin ? `0.1rem solid ${Colors.gray150}` : ''};
		border-bottom: ${(props) =>
			props.isNotice && !props.isAdmin ? `0.1rem solid ${Colors.gray150}` : ''};
		border-radius: ${(props) => props.isAdmin && '0.6rem'};
		min-height: 4.9rem;
		padding: 1.5rem 3rem;
		display: flex;
		align-items: flex-start;
		gap: 3rem;
		margin-bottom: ${(props) => (props.isAdmin ? '1rem' : '9.1rem')};

		> h3 {
			${Fonts.medium16}
			color: ${(props) => props.isAdmin && Colors.white};
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
				color: ${(props) => props.isAdmin && Colors.white};

				> svg > path {
					transition: 0.5s ease;
					fill: ${(props) => props.isAdmin && Colors.white};
				}

				&:hover {
					color: ${Colors.blue300};
					color: ${(props) => props.isAdmin && Colors.blue100};

					> svg > path {
						fill: ${Colors.blue300};
						fill: ${(props) => props.isAdmin && Colors.blue100};
					}
				}
			}
		}
	`;
}
