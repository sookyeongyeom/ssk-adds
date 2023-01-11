import { useEffect } from 'react';

export default function usePreventBodyScroll(isPrevent: boolean) {
	return useEffect(() => {
		if (isPrevent) document.body.style.overflow = 'hidden';
		else document.body.style.overflow = 'scroll';
	}, [isPrevent]);
}
