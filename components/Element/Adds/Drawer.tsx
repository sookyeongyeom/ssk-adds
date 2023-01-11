import styled from 'styled-components';
import { Colors } from '../../../styles/colors';
import { BoxShadows } from '../../../styles/shadows';
import { SC } from '../../../styles/styled';
import Sidebar from './Sidebar';
import useTitlePath from '../../../hooks/useTitlePath';
import { DrawerProps } from '../../../@types/adds';
import { Fonts } from '../../../styles/fonts';
import usePreventBodyScroll from '../../../hooks/usePreventBodyScroll';

export default function Drawer({ isDrawerOpen, drawerRef }: DrawerProps) {
	const { path } = useTitlePath();
	usePreventBodyScroll(isDrawerOpen);
	return (
		<>
			<S.DrawerLayout isOpen={isDrawerOpen} ref={drawerRef}>
				<div>
					<div>
						<img src='/assets/footer_logo.png' />
					</div>
					<div>
						<h1>SSK ADDS</h1>
						<h2>알파 세대 데이터 일상 종단</h2>
					</div>
				</div>
				<Sidebar path={path} isDrawer />
			</S.DrawerLayout>
			<S.Background isOpen={isDrawerOpen} />
		</>
	);
}

namespace S {
	export const DrawerLayout = styled(SC.ShowIfMobile)<isOpenType>`
		position: fixed;
		left: ${(props) => (props.isOpen ? 0 : '-100%')};
		transition: 0.5s ease left;
		z-index: 100;
		width: 75vw;
		height: 100vh;
		overflow: scroll;
		background-color: ${Colors.white};
		box-shadow: ${BoxShadows.smooth};
		padding: 1rem;

		> div:first-of-type {
			display: flex;
			align-items: center;
			gap: 1rem;
			padding: 2rem 1rem;
			padding-bottom: 2.5rem;

			> div {
				&:first-of-type {
					width: 5.5rem;
				}

				> img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}

				> h1 {
					${Fonts.medium20}
					margin-bottom: 0.5rem;
				}

				> h2 {
					${Fonts.regular14}
					word-break: keep-all;
					line-height: 120%;
				}
			}
		}

		> aside {
			div,
			h3 {
				border: none !important;
			}
		}
	`;

	export const Background = styled(SC.ShowIfMobile)<isOpenType>`
		background-color: rgba(0, 0, 0, 0.3);
		width: 100%;
		height: 100%;
		position: fixed;
		z-index: 99;
		opacity: ${(props) => (props.isOpen ? 1 : 0)};
		visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
		transition: 0.5s ease;
	`;
}
