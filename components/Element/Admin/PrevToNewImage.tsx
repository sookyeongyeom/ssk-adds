import styled from 'styled-components';
import { PrevToNewImageProps } from '../../../@types/shared';
import { Assets } from '../../../constants/assets';
import { getDownloadLinkFromS3 } from '../../../s3';
import { SC } from '../../../styles/styled';
import { svgRight } from '../../../styles/svgs';
import AdminButton from './AdminButton';
import ImagePreview from './ImagePreview';

export default function PrevToNewImage({
	imgs,
	prevImg,
	folder,
	wishToDeleteFileKeys,
	onToggleToDelete,
}: PrevToNewImageProps) {
	return (
		<S.Photo>
			{/* 기존 사진 */}
			{prevImg && (!wishToDeleteFileKeys.has(prevImg.key) || imgs.length) ? (
				<SC.PrevImage>
					<img src={getDownloadLinkFromS3(folder, prevImg.key)} />
				</SC.PrevImage>
			) : (
				<SC.PrevImage>
					<img src={Assets.placeholderImgSrc} />
				</SC.PrevImage>
			)}
			{/* 새로운 사진 */}
			{!!imgs.length && (
				<>
					<div>{svgRight}</div>
					<ImagePreview file={imgs[0]} />
				</>
			)}
			{prevImg && !imgs.length && (
				<AdminButton
					onClick={() => onToggleToDelete(prevImg.key)}
					isRed={wishToDeleteFileKeys.has(prevImg.key)}
					isOrange>
					{wishToDeleteFileKeys.has(prevImg.key) ? '기존 사진 삭제 취소' : '기존 사진 삭제하기'}
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
