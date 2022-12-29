import { ViewPageProps } from '../../../@types/pages';
import styled from 'styled-components';
import { Paths } from '../../../constants/paths';
import { useEffect, useState } from 'react';
import { ResponseMember } from '../../../@types/api/member';
import { getMemberById } from '../../../api/member';
import useGet from '../../../hooks/useGet';
import { getDownloadLinkFromS3 } from '../../../s3/index';
import { S3Folders } from '../../../constants/s3';
import { Assets } from '../../../constants/assets';
import useEditDelete from '../../../hooks/useEditDelete';
import { SC } from '../../../styles/styled';
import AdminView from '../../Element/Admin/AdminView';

export default function MemberViewPage({ id }: ViewPageProps) {
	const basePath = Paths.admin + Paths.member;
	const { onEdit, onDelete } = useEditDelete(basePath, id);
	const [member, setMember] = useState<ResponseMember.GetById>();
	const [src, setSrc] = useState<FileDataType>({ key: Assets.placeholderImgSrc, name: '' });

	useEffect(() => {
		if (id !== undefined && !isNaN(id)) useGet(() => getMemberById({ id }), setMember);
	}, [id]);

	useEffect(() => {
		if (member) {
			try {
				const src = JSON.parse(member!.img)[0];
				if (src) setSrc(src);
			} catch {
				/* 유효한 이미지 없음 */
			}
		}
	}, [member]);

	return (
		<S.MemberViewPageLayout>
			<AdminView id={id} basePath={basePath} onEdit={onEdit} onDelete={onDelete}>
				<div>사진</div>
				{src.name ? (
					<SC.ImageBox>
						<img src={getDownloadLinkFromS3(S3Folders.member, src.key)} />
					</SC.ImageBox>
				) : (
					<SC.ImageBox>
						<img src={src.key} />
					</SC.ImageBox>
				)}
				<div>이름</div>
				<div>{member?.name}</div>
				<div>이메일</div>
				<div>{member?.email}</div>
				<div>홈페이지</div>
				<div>{member?.homepage}</div>
				<div>연락처</div>
				<div>{member?.phoneNumber}</div>
				<div>소개</div>
				<div>{member?.introBody}</div>
				<div>직무</div>
				<div>{member?.jobTitle}</div>
				<div>역할</div>
				<div>{member?.responsibility}</div>
			</AdminView>
		</S.MemberViewPageLayout>
	);
}

namespace S {
	export const MemberViewPageLayout = styled.div``;
}
