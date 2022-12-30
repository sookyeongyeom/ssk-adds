import styled from 'styled-components';
import { Colors } from '../../styles/colors';
import { BoxShadows } from '../../styles/shadows';
import StoreProvider from '../Provider/StoreProvider';

export default function LoginLayout({ children }: ChildrenType) {
	return (
		<StoreProvider>
			<S.Layout>
				<aside>
					<div />
				</aside>
				<main>{children}</main>
			</S.Layout>
		</StoreProvider>
	);
}

namespace S {
	export const Layout = styled.div`
		display: flex;
		height: 100vh;

		> aside {
			width: 100%;
			color: ${Colors.white};
			background: url(/assets/admin_login.jpg);
			background-repeat: no-repeat;
			background-size: cover;
			background-position: center;
			position: relative;

			> div {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background-color: ${Colors.blue500};
				opacity: 0.8;
			}
		}

		> main {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			padding: 5rem;
			border-radius: 0.6rem;
			background-color: ${Colors.white};
			box-shadow: ${BoxShadows.smooth};
		}
	`;
}
