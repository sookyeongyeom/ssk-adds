import Link from 'next/link';
import styled from 'styled-components';
import { Colors } from '../../styles/colors';
import { Paths } from '../../constants/paths';
import { useDispatch } from 'react-redux';
import { revokeAuth } from '../../modules/auth';

export default function AdminSidebar() {
	const dispatch = useDispatch();
	const onLogout = () => dispatch(revokeAuth());

	return (
		<S.AdminSidebarLayout>
			<Link href={Paths.admin + Paths.member}>연구진소개</Link>
			<Link href={Paths.admin + Paths.publication}>발간물</Link>
			<Link href={Paths.admin + Paths.resource}>자료안내</Link>
			<Link href={Paths.admin + Paths.paper}>데이터활용논문</Link>
			<Link href={Paths.admin + Paths.notice}>공지사항</Link>
			<Link href={Paths.admin + Paths.news}>보도자료</Link>
			<Link href={Paths.admin + Paths.faq}>FAQ</Link>
			<Link href={Paths.admin + Paths.contact}>Contact</Link>
			<button onClick={onLogout}>로그아웃</button>
		</S.AdminSidebarLayout>
	);
}

namespace S {
	export const AdminSidebarLayout = styled.aside`
		width: 30rem;
		background-color: ${Colors.gray100};
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 1rem;

		> button {
			margin-top: auto;
		}
	`;
}
