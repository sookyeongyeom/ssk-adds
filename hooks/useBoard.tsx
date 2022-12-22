import { useEffect, useState } from 'react';
import { useBoard } from '../@types/hooks';

/**
 * 지정한 컬럼 순서대로 데이터를 매핑한 결과를 반환 */
export default function useBoardMaps<T extends { items: any }>({ dep, order }: useBoard<T>) {
	const [maps, setMaps] = useState<Map<string, string>[]>();

	useEffect(() => {
		if (dep) {
			const datas = [];
			for (const item of dep.items) {
				const data = new Map<string, string>();
				for (const key of order.keys()) data.set(key, `${item[key]}`);
				datas.push(data);
			}
			setMaps(datas);
		}
	}, [dep]);

	return maps;
}
