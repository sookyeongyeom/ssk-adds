import { useEffect, useRef } from 'react';

export default function useInterval(callback: any, delay: number) {
	const savedCallback = useRef(null) as any;

	useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);

	useEffect(() => {
		const executeCallback = () => savedCallback.current();
		const timerId = setInterval(executeCallback, delay);
		return () => clearInterval(timerId);
	}, [delay]);
}
