import styled from 'styled-components';
import AdminSidebar from '../Shared/AdminSidebar';

export default function AdminLayout({ children }: ChildrenType) {
	return (
		<S.Layout>
			<AdminSidebar />
			<main>{children}</main>
		</S.Layout>
	);
}

namespace S {
	export const Layout = styled.div`
		min-height: 100vh;
		display: flex;

		> main {
			flex-grow: 1;
			background-color: pink;
		}
	`;
}
