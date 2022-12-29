import { ViewPageProps } from '../../../@types/pages';
import styled from 'styled-components';
import { Paths } from '../../../constants/paths';
import { useEffect, useState } from 'react';
import useGet from '../../../hooks/useGet';
import { getDownloadLinkFromS3 } from '../../../s3/index';
import { S3Folders } from '../../../constants/s3';
import { Assets } from '../../../constants/assets';
import { ResponsePublication } from '../../../@types/api/publication';
import { getPublicationById } from '../../../api/publication';
import Link from 'next/link';
import useEditDelete from '../../../hooks/useEditDelete';
import AdminView from '../../Element/Admin/AdminView';
import { SC } from '../../../styles/styled';
import { svgDownload } from '../../../styles/svgs';

export default function PublicationViewPage({ id }: ViewPageProps) {
	const basePath = Paths.admin + Paths.publication;
	const { onEdit, onDelete } = useEditDelete(basePath, id);
	const [publication, setPublication] = useState<ResponsePublication.GetById>();
	const [img, setImg] = useState<FileDataType>({ key: Assets.placeholderImgSrc, name: '' });
	const [pdf, setPdf] = useState<FileDataType>();

	useEffect(() => {
		if (id !== undefined && !isNaN(id)) useGet(() => getPublicationById({ id }), setPublication);
	}, [id]);

	useEffect(() => {
		if (publication) {
			try {
				const img = JSON.parse(publication!.img)[0];
				if (img) setImg(img);
			} catch {
				/* 유효한 IMG 없음 */
			}
			try {
				const pdf = JSON.parse(publication!.pdf)[0];
				if (pdf) setPdf(pdf);
			} catch {
				/* 유효한 PDF 없음 */
			}
		}
	}, [publication]);

	return (
		<S.MemberViewPageLayout>
			<AdminView id={id} basePath={basePath} onEdit={onEdit} onDelete={onDelete}>
				<div>사진</div>
				<SC.ImageBox>
					{img?.name ? (
						<img src={getDownloadLinkFromS3(S3Folders.publication, img.key)} />
					) : (
						<img src={img.key} />
					)}
				</SC.ImageBox>
				<div>PDF</div>
				{pdf?.key ? (
					<SC.PdfBox>
						<Link href={getDownloadLinkFromS3(S3Folders.publication, pdf?.key)}>
							{svgDownload} <span>{pdf?.name}</span>
						</Link>
					</SC.PdfBox>
				) : (
					<SC.Empty>첨부된 PDF가 없습니다</SC.Empty>
				)}
				<div>제목</div>
				<div>{publication?.title}</div>
				<div>작성자</div>
				<div>{publication?.writer}</div>
			</AdminView>
		</S.MemberViewPageLayout>
	);
}

namespace S {
	export const MemberViewPageLayout = styled.div``;
}
