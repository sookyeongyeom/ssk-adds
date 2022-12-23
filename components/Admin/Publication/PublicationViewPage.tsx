import { ViewPageProps } from '../../../@types/pages';
import styled from 'styled-components';
import BoardButton from '../../Element/Shared/BoardButton';
import { Paths } from '../../../constants/paths';
import { useEffect, useState } from 'react';
import useGet from '../../../hooks/useGet';
import { getDownloadLinkFromS3 } from '../../../s3/index';
import { S3Folders } from '../../../constants/s3';
import AdminButton from '../../Element/Admin/AdminButton';
import { useRouter } from 'next/router';
import { Assets } from '../../../constants/assets';
import { ResponsePublication } from '../../../@types/api/publication';
import { getPublicationById, deletePublication } from '../../../api/publication';
import Link from 'next/link';

export default function PublicationViewPage({ id }: ViewPageProps) {
	const router = useRouter();
	const basePath = Paths.admin + Paths.publication;
	const [publication, setPublication] = useState<ResponsePublication.GetById>();
	const [img, setImg] = useState<FileDataType>({ key: Assets.placeholderImgSrc, name: '' });
	const [pdf, setPdf] = useState<FileDataType>();

	const onEdit = () => router.push(basePath + Paths.edit + `/${id}`);

	const onDelete = async () => {
		const api = basePath;
		if (api && id) {
			try {
				await deletePublication({ id });
			} catch (e) {
				console.log(e);
			}
		}
	};

	useEffect(() => {
		if (id) useGet(() => getPublicationById({ id }), setPublication);
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
			<AdminButton onClick={onEdit}>수정</AdminButton>{' '}
			<AdminButton onClick={onDelete}>삭제</AdminButton>
			{img?.name ? (
				<div>
					<img src={getDownloadLinkFromS3(S3Folders.publication, img.key)} />
				</div>
			) : (
				<div>
					<img src={img.key} />
				</div>
			)}
			PDF:
			{pdf?.key ? (
				<Link href={getDownloadLinkFromS3(S3Folders.publication, pdf?.key)}>{pdf?.name}</Link>
			) : (
				'없음'
			)}
			<div>제목:{publication?.title}</div>
			<div>작성자:{publication?.writer}</div>
			<BoardButton boardPath={basePath} />
		</S.MemberViewPageLayout>
	);
}

namespace S {
	export const MemberViewPageLayout = styled.div`
		> div:first-of-type {
			width: 15rem;
			height: 18rem;

			> img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
	`;
}
