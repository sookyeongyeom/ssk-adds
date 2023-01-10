import { MutableRefObject, useEffect } from 'react';

export default function useOutsideClick<T extends HTMLElement>(
	ref: MutableRefObject<T>,
	onOutsideClick: () => void,
) {
	const eventListener = (e: CustomEvent<MouseEvent>) => {
		if (!ref?.current?.contains(e.target as Node)) {
			onOutsideClick();
		}
	};

	return useEffect(() => {
		window.addEventListener('click', eventListener as EventListener);
		return () => window.removeEventListener('click', eventListener as EventListener);
	}, []);
}
