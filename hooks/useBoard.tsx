import { useEffect } from 'react';
import { useBoard } from '../@types/hooks';

/**
 * 지정한 컬럼 순서대로 데이터를 매핑해주는 useEffect를 반환 */
export default function useBoardMaps<T extends { items: any }>({
	dispatch,
	dep,
	order,
}: useBoard<T>) {
	return useEffect(() => {
		if (dep && Object.keys(dep).length) {
			const datas = [];
			for (const item of dep.items) {
				const data = new Map<string, string>();
				for (const key of order.keys()) data.set(key, `${item[key]}`);
				datas.push(data);
			}
			dispatch(datas);
		}
	}, [dep]);
}
