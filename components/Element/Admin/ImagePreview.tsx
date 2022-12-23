import { ImagePreviewProps } from '../../../@types/shared';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Assets } from '../../../constants/assets';

export default function ImagePreview({ file }: ImagePreviewProps) {
	const [src, setSrc] = useState<string>(Assets.placeholderImgSrc);

	useEffect(() => {
		if (file) {
			const src = URL.createObjectURL(file);
			setSrc(src);
		} else setSrc(Assets.placeholderImgSrc);
	}, [file]);

	return (
		<S.ImagePreviewLayout>
			<img src={src} />
		</S.ImagePreviewLayout>
	);
}

namespace S {
	export const ImagePreviewLayout = styled.div`
		width: 15rem;
		height: 18rem;

		> img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	`;
}
