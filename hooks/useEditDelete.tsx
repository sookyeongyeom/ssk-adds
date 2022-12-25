import { useRouter } from 'next/router';
import { Paths } from '../constants/paths';
import getDeleteApiDependsOnPath from '../utils/getDeleteApiDependsOnPath';

export default function useEditDelete(basePath: string, id: number) {
	const router = useRouter();
	const onEdit = () => router.push(basePath + Paths.edit + `/${id}`);
	const onDelete = async () => {
		if (id !== undefined) {
			try {
				const api = getDeleteApiDependsOnPath(basePath);
				if (api) await api({ id });
				alert('게시글을 삭제했습니다.');
				router.push(basePath);
			} catch (e) {
				console.log(e);
			}
		}
	};
	return { onEdit, onDelete };
}
