import { ViewPageProps } from '../../../@types/pages';
import styled from 'styled-components';
import BoardButton from '../../Element/Shared/BoardButton';
import { Paths } from '../../../constants/paths';
import { useEffect, useState } from 'react';
import { ResponseMember } from '../../../@types/api/member';
import { getMemberById, deleteMember } from '../../../api/member';
import useGet from '../../../hooks/useGet';
import { getDownloadLinkFromS3 } from '../../../s3/index';
import { S3Folders } from '../../../constants/s3';
import AdminButton from '../../Element/Admin/AdminButton';
import { useRouter } from 'next/router';
import { Assets } from '../../../constants/assets';

export default function MemberViewPage({ id }: ViewPageProps) {
	const router = useRouter();
	const basePath = Paths.admin + Paths.member;
	const [member, setMember] = useState<ResponseMember.GetById>();
	const [src, setSrc] = useState<string>(Assets.placeholderImgSrc);

	const onEdit = () => router.push(basePath + Paths.edit + `/${id}`);

	const onDelete = async () => {
		const api = basePath;
		if (api && id) {
			try {
				await deleteMember({ id });
			} catch (e) {
				console.log(e);
			}
		}
	};

	useEffect(() => {
		if (id) useGet(() => getMemberById({ id }), setMember);
	}, [id]);

	useEffect(() => {
		if (member) {
			try {
				const src = getDownloadLinkFromS3(S3Folders.member, JSON.parse(member!.img)[0].key);
				setSrc(src);
			} catch {
				/* 유효한 이미지 없음 */
			}
		}
	}, [member]);

	return (
		<S.MemberViewPageLayout>
			<AdminButton onClick={onEdit}>수정</AdminButton>{' '}
			<AdminButton onClick={onDelete}>삭제</AdminButton>
			{member?.img && (
				<div>
					<img src={src} />
				</div>
			)}
			<div>{member?.name}</div>
			<div>{member?.email}</div>
			<div>{member?.homepage}</div>
			<div>{member?.phoneNumber}</div>
			<div>{member?.introBody}</div>
			<div>{member?.jobTitle}</div>
			<div>{member?.responsibility}</div>
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
