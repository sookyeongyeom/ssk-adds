import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ResponsePublication } from '../../../@types/api/publication';
import useChangePage from '../../../hooks/useChangePage';
import useGet from '../../../hooks/useGet';
import { SC } from '../../../styles/styled';
import SelectBox from '../../Element/Adds/SelectBox';
import { getPublication } from '../../../api/publication';
import { PublicationBoxElementProps } from '../../../@types/adds';
import { Colors } from '../../../styles/colors';
import { getDownloadLinkFromS3 } from '../../../s3/index';
import { S3Folders } from '../../../constants/s3';
import { Assets } from '../../../constants/assets';
import stringToJson from '../../../utils/stringToJson';
import { Fonts } from '../../../styles/fonts';
import { svgDownload } from '../../../styles/svgs';
import { Devices } from '../../../styles/devices';
import PageButton from '../../Element/Shared/PageButton';
import { Sizes } from '../../../styles/sizes';

export default function PublicationPage() {
	const [publication, setPublication] = useState<ResponsePublication.Get>();
	const { page, onChangePage } = useChangePage();

	useEffect(() => {
		useGet(() => getPublication({ page }), setPublication);
	}, [page]);

	return (
		<S.PublicationPageLayout>
			<SelectBox options={['최신순 정렬']} />
			<div>
				{publication &&
					publication.items.map((publication, i) => (
						<PublicationBoxElement
							title={publication.title}
							writer={publication.writer}
							img={publication.img}
							pdf={publication.pdf}
						/>
					))}
				<div>
					<PageButton
						currentPage={page}
						totalPosts={publication?.total}
						size={publication?.size}
						onChangePage={onChangePage}
					/>
				</div>
			</div>
		</S.PublicationPageLayout>
	);
}

function PublicationBoxElement({ title, writer, img, pdf }: PublicationBoxElementProps) {
	let imgSrc: string = Assets.placeholderImgSrc;
	const parsedImg: FileDataType = stringToJson(img)?.[0];
	if (parsedImg) imgSrc = getDownloadLinkFromS3(S3Folders.publication, parsedImg.key);

	let pdfSrc;
	const parsedPdf: FileDataType = pdf && stringToJson(pdf)?.[0];
	if (parsedPdf) pdfSrc = getDownloadLinkFromS3(S3Folders.publication, parsedPdf.key);

	return (
		<S.PublicationBoxElementLayout>
			<div>
				<img src={imgSrc} />
			</div>
			<div>
				<h2>{title}</h2>
				<h3>{writer}</h3>
				{pdfSrc && (
					<h4>
						<SC.LinkHighlight>
							<a href={pdfSrc}>
								{svgDownload}
								{parsedPdf.name}
							</a>
						</SC.LinkHighlight>
					</h4>
				)}
			</div>
		</S.PublicationBoxElementLayout>
	);
}

namespace S {
	export const PublicationPageLayout = styled.div`
		${SC.AlignSelectBoxForBoard}

		>div:nth-of-type(2)> div:last-of-type {
			margin-top: calc(${Sizes.desktopPageButtonMarginTop});
		}
	`;

	export const PublicationBoxElementLayout = styled.div`
		display: flex;
		padding: 3.2rem 2.7rem;
		gap: 2.6rem;
		border-bottom: 1px solid ${Colors.gray200};

		&:first-of-type {
			border-top: 1px solid ${Colors.gray300};
		}

		/* 이미지 */
		> div:first-of-type {
			width: 25.8rem;
			height: 15.5rem;
			flex-shrink: 0;
			background-color: ${Colors.gray150};

			> img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}

		/* 정보 */
		> div:nth-of-type(2) {
			display: flex;
			flex-direction: column;
			padding-bottom: 0.3rem;

			> h2 {
				${Fonts.bold18}
				margin-bottom:1.4rem;
				line-height: 130%;
				word-break: keep-all;
			}

			> h3 {
				${Fonts.light16}
				padding-left: 0.1rem;
			}

			> h4 {
				margin-top: auto;
			}
		}

		@media ${Devices.mobile} {
			flex-direction: column;
			align-items: center;
			padding: 3.2rem 3.1rem;

			/* 이미지 */
			> div:first-of-type {
				width: 83vw;
				height: 50vw;
				max-width: 100%;
			}

			/* 정보 */
			> div:nth-of-type(2) {
				justify-content: center;

				> h2,
				> h3 {
					text-align: center;
				}

				> h4 {
					display: flex;
					justify-content: center;
					margin-top: 1.3rem;
				}
			}
		}
	`;
}
