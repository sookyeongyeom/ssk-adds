import { svgMenu } from '../../../styles/svgs';
import { BoardButtonProps } from '../../../@types/shared';
import AdminButton from '../Admin/AdminButton';
import useRoute from '../../../hooks/useRoute';

export default function AdminBoardButton({ boardPath }: BoardButtonProps) {
	const { onRouteToPath } = useRoute(boardPath);
	return <AdminButton onClick={onRouteToPath}>{svgMenu}목록</AdminButton>;
}
