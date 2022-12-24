import styled from 'styled-components';
import { AdminHeaderProps } from '../../../@types/shared';
import { Fonts } from '../../../styles/fonts';
import { Sizes } from '../../../styles/sizes';
import useTitle from '../../../hooks/useTitlePath';

export default function AdminHeader({ onToggleSidebar }: AdminHeaderProps) {
	const { title } = useTitle();
	return (
		<S.AdminHeaderLayout>
			<div>
				<button onClick={onToggleSidebar}>닫기버튼</button>
				<h1>{title}</h1>
			</div>
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

		> div {
			display: flex;
			align-items: center;
			gap: 1rem;

			> h1 {
				${Fonts.bold20}
			}

			> button {
				background-color: #e2536b;
				padding: 1rem;
			}
		}
	`;
}
