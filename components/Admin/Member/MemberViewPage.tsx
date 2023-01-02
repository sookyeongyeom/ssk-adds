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
import stringToJson from '../../../utils/stringToJson';

export default function MemberViewPage({ id }: ViewPageProps) {
	const basePath = Paths.admin + Paths.member;
	const { onEdit, onDelete } = useEditDelete(basePath, id);
	const [member, setMember] = useState<ResponseMember.GetById>();
	const [img, setImg] = useState<FileDataType>();

	useEffect(() => {
		if (id !== undefined && !isNaN(id)) useGet(() => getMemberById({ id }), setMember);
	}, [id]);

	useEffect(() => {
		if (member) {
			const parsedImg: FileDataType = stringToJson(member!.img)?.[0];
			if (parsedImg) setImg(parsedImg);
		}
	}, [member]);

	return (
		<S.MemberViewPageLayout>
			<AdminView id={id} basePath={basePath} onEdit={onEdit} onDelete={onDelete}>
				<SC.Label>사진</SC.Label>
				{img ? (
					<SC.ImageBox>
						<img src={getDownloadLinkFromS3(S3Folders.member, img.key)} />
					</SC.ImageBox>
				) : (
					<SC.ImageBox>
						<img src={Assets.placeholderImgSrc} />
					</SC.ImageBox>
				)}
				<SC.Label>이름</SC.Label>
				<div>{member?.name}</div>
				<SC.Label>이메일</SC.Label>
				<div>{member?.email}</div>
				<SC.Label>홈페이지</SC.Label>
				<div>{member?.homepage}</div>
				<SC.Label>연락처</SC.Label>
				<div>{member?.phoneNumber}</div>
				<SC.Label>소개</SC.Label>
				<div>{member?.introBody}</div>
				<SC.Label>직무</SC.Label>
				<div>{member?.jobTitle}</div>
				<SC.Label>역할</SC.Label>
				<div>{member?.responsibility}</div>
			</AdminView>
		</S.MemberViewPageLayout>
	);
}

namespace S {
	export const MemberViewPageLayout = styled.div``;
}
