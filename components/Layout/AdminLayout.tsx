import styled from 'styled-components';
import AdminSidebar from '../Shared/AdminSidebar';
import StoreProvider from '../Provider/StoreProvider';

export default function AdminLayout({ children }: ChildrenType) {
	return (
		<StoreProvider>
			<S.Layout>
				<AdminSidebar />
				<main>{children}</main>
			</S.Layout>
		</StoreProvider>
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
