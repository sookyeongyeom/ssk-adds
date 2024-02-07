import Link from 'next/link';
import styled from 'styled-components';
import { Colors } from '../../../styles/colors';
import { Paths } from '../../../constants/paths';
import { useDispatch } from 'react-redux';
import { revokeAuth } from '../../../modules/auth';
import { Fonts } from '../../../styles/fonts';
import { Sizes } from '../../../styles/sizes';
import { AdminSidebarProps } from '../../../@types/shared';
import { BoxShadows } from '../../../styles/shadows';
import useTitlePath from '../../../hooks/useTitlePath';
import { svgLogout } from '../../../styles/svgs';

export default function AdminSidebar({ isSidebarOpen }: AdminSidebarProps) {
	const dispatch = useDispatch();
	const onLogout = () => dispatch(revokeAuth());
	const { path } = useTitlePath();
	return (
		<S.AdminSidebarLayout isSidebarOpen={isSidebarOpen}>
			<h1>
				<div>SSK ADDS</div>
			</h1>
			<S.MenuWrapper>
				<S.Menu isCurrent={path === Paths.member}>
					<Link href={Paths.admin + Paths.member}>연구진소개</Link>
				</S.Menu>
				<S.Menu isCurrent={path === Paths.publication}>
					<Link href={Paths.admin + Paths.publication}>발간물</Link>
				</S.Menu>
				<S.Menu isCurrent={path === Paths.resource}>
					<Link href={Paths.admin + Paths.resource}>자료안내</Link>
				</S.Menu>
				<S.Menu isCurrent={path === Paths.paper}>
					<Link href={Paths.admin + Paths.paper}>연구실적</Link>
				</S.Menu>
				<S.Menu isCurrent={path === Paths.notice}>
					<Link href={Paths.admin + Paths.notice}>공지사항</Link>
				</S.Menu>
				<S.Menu isCurrent={path === Paths.news}>
					<Link href={Paths.admin + Paths.news}>보도자료</Link>
				</S.Menu>
				<S.Menu isCurrent={path === Paths.faq}>
					<Link href={Paths.admin + Paths.faq}>FAQ</Link>
				</S.Menu>
				<S.Menu isCurrent={path === Paths.contact}>
					<Link href={Paths.admin + Paths.contact}>Contact</Link>
				</S.Menu>
			</S.MenuWrapper>
			<button onClick={onLogout}>{svgLogout} 로그아웃</button>
			<S.Signature>PLAYIDEA</S.Signature>
		</S.AdminSidebarLayout>
	);
}

namespace S {
	export const AdminSidebarLayout = styled.aside<SidebarToggleProps>`
		width: ${Sizes.desktopAdminSidebarWidth};
		background-color: ${Colors.white};
		box-shadow: ${BoxShadows.smooth};
		display: flex;
		flex-direction: column;
		height: 100vh;
		position: fixed;
		left: ${(props) => (props.isSidebarOpen ? '0' : `-${Sizes.desktopAdminSidebarWidth}`)};
		transition: 0.5s ease;
		z-index: 10;

		> h1 {
			height: 10rem;
			display: flex;
			align-items: center;
			gap: 1rem;
			padding: 0 3.5rem;

			> div:last-of-type {
				${Fonts.bold18}
				width: fit-content;
				color: ${Colors.blue450};
			}
		}

		> button {
			${Fonts.medium14}
			padding: 0.8rem 3rem;
			display: flex;
			align-items: center;
			gap: 0.5rem;
			transition: 0.3s ease;

			> svg {
				position: relative;
				top: 0.1rem;
				transition: 0.3s ease;
			}

			&:hover {
				color: ${Colors.blue450};

				> svg {
					transform: translateX(-10%);
				}
			}
		}
	`;

	export const MenuWrapper = styled.div`
		display: flex;
		flex-direction: column;
		gap: 1.3rem;
		border-bottom: 0.1rem solid ${Colors.gray100};
		padding-bottom: 3rem;
		margin-bottom: 3rem;

		> div > a {
			${Fonts.medium15}
			display: block;
			padding: 0.8rem 3rem;
		}
	`;

	export const Menu = styled.div<MenuProps>`
		border-left: 0.5rem solid ${Colors.blue450};
		border-color: ${(props) => !props.isCurrent && 'transparent'};
		transition: 0.3s ease;

		> a {
			color: ${(props) => props.isCurrent && Colors.blue450};
			transition: 0.3s ease;
		}

		&:hover {
			> a {
				color: ${Colors.blue450};
			}
		}
	`;

	export const Signature = styled.div`
		${Fonts.bold12}
		padding: 2.5rem 3.5rem;
		color: ${Colors.blue450};
		letter-spacing: 0.1rem;
		font-family: Arial;
		margin-top: auto;
	`;
}
