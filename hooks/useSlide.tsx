import { useSlideParams } from '../@types/hooks';
import { useEffect, useRef } from 'react';

export default function useSlide<T extends HTMLElement>({ targetRef, isOpen }: useSlideParams<T>) {
	let targetHeight = useRef(0);

	return useEffect(() => {
		/* 최초에 높이 측정 후 닫기 */
		if (!isOpen) {
			const height = targetRef.current.clientHeight;
			if (height) {
				if (!targetHeight.current) targetHeight.current = height;
				targetRef.current.style.height = '0rem';
			}
		}
		/* 오픈하면 측정했던 높이로 회귀 */
		if (isOpen && targetHeight.current) {
			targetRef.current.style.height = `${targetHeight.current / 10}rem`;
		}
	}, [isOpen]);
}
