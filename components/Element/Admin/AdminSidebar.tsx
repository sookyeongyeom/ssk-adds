import Link from 'next/link';
import styled from 'styled-components';
import { Colors } from '../../../styles/colors';
import { Paths } from '../../../constants/paths';
import { useDispatch } from 'react-redux';
import { revokeAuth } from '../../../modules/auth';
import { Fonts } from '../../../styles/fonts';
import { Sizes } from '../../../styles/sizes';
import { AdminSidebarProps } from '../../../@types/shared';

export default function AdminSidebar({ isSidebarOpen }: AdminSidebarProps) {
	const dispatch = useDispatch();
	const onLogout = () => dispatch(revokeAuth());

	return (
		<S.AdminSidebarLayout isSidebarOpen={isSidebarOpen}>
			<h1>SSK ADDS</h1>
			<S.MenuWrapper>
				<h2>Catogories</h2>
				<Link href={Paths.admin + Paths.member}>연구진소개</Link>
				<Link href={Paths.admin + Paths.publication}>발간물</Link>
				<Link href={Paths.admin + Paths.resource}>자료안내</Link>
				<Link href={Paths.admin + Paths.paper}>데이터활용논문</Link>
				<Link href={Paths.admin + Paths.notice}>공지사항</Link>
				<Link href={Paths.admin + Paths.news}>보도자료</Link>
				<Link href={Paths.admin + Paths.faq}>FAQ</Link>
				<Link href={Paths.admin + Paths.contact}>Contact</Link>
			</S.MenuWrapper>
			<button onClick={onLogout}>로그아웃</button>
			<S.Signature>Powered by. PLAYIDEA</S.Signature>
		</S.AdminSidebarLayout>
	);
}

namespace S {
	export const AdminSidebarLayout = styled.aside<SidebarToggleProps>`
		width: ${Sizes.desktopAdminSidebarWidth};
		background-color: ${Colors.gray100};
		display: flex;
		flex-direction: column;
		height: 100vh;
		position: fixed;
		left: ${(props) => (props.isSidebarOpen ? '0' : `-${Sizes.desktopAdminSidebarWidth}`)};
		transition: 0.5s ease;

		> h1 {
			${Fonts.bold18}
			background-color: ${Colors.blue300};
			color: ${Colors.white};
			height: ${Sizes.desktopAdminHeaderHeight};
			display: flex;
			align-items: center;
			padding: 2rem;
		}

		> button {
			margin-top: auto;
		}
	`;

	export const MenuWrapper = styled.div`
		display: flex;
		flex-direction: column;

		> h2 {
			background-color: lightblue;
			padding: 1rem;
		}

		> a {
			background-color: lightcyan;
			padding: 1rem;
		}
	`;

	export const Signature = styled.div`
		padding: 2rem;
		background-color: aliceblue;
	`;
}
