import styled from 'styled-components';
import { PrevToNewImageProps } from '../../../@types/shared';
import { Assets } from '../../../constants/assets';
import { S3Folders } from '../../../constants/s3';
import { getDownloadLinkFromS3 } from '../../../s3';
import { SC } from '../../../styles/styled';
import { svgRight } from '../../../styles/svgs';
import AdminButton from './AdminButton';
import ImagePreview from './ImagePreview';

export default function PrevToNewImage({
	prevFileKey,
	wishToDeleteFileKeys,
	files,
	onToggleToDelete,
}: PrevToNewImageProps) {
	return (
		<S.Photo>
			{/* 기존 사진 */}
			{prevFileKey && (!wishToDeleteFileKeys.has(prevFileKey) || files.length) ? (
				<SC.PrevImage>
					<img src={getDownloadLinkFromS3(S3Folders.member, prevFileKey)} />
				</SC.PrevImage>
			) : (
				<SC.PrevImage>
					<img src={Assets.placeholderImgSrc} />
				</SC.PrevImage>
			)}
			{/* 새로운 사진 */}
			{!!files.length && (
				<>
					<div>{svgRight}</div>
					<ImagePreview file={files[0]} />
				</>
			)}
			{prevFileKey && !files.length && (
				<AdminButton
					onClick={() => onToggleToDelete(prevFileKey)}
					isRed={wishToDeleteFileKeys.has(prevFileKey)}
					isOrange>
					{wishToDeleteFileKeys.has(prevFileKey) ? '기존 사진 삭제 취소' : '기존 사진 삭제하기'}
				</AdminButton>
			)}
		</S.Photo>
	);
}

namespace S {
	export const Photo = styled.div`
		display: flex;
		gap: 2rem;
		align-items: center;

		> button {
			align-self: flex-end;
		}
	`;
}
