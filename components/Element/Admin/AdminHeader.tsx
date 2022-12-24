import styled from 'styled-components';
import { AdminHeaderProps } from '../../../@types/shared';
import { Sizes } from '../../../styles/sizes';

export default function AdminHeader({ onToggleSidebar }: AdminHeaderProps) {
	return (
		<S.AdminHeaderLayout>
			<button onClick={onToggleSidebar}>닫기버튼</button>
			<div>마크</div>
		</S.AdminHeaderLayout>
	);
}

namespace S {
	export const AdminHeaderLayout = styled.header`
		background-color: pink;
		height: ${Sizes.desktopAdminHeaderHeight};
		padding: 2rem;
		display: flex;
		align-items: center;
		justify-content: space-between;

		> button {
			background-color: #e2536b;
			padding: 1rem;
		}
	`;
}
