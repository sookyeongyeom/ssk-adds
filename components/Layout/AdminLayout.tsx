import styled from 'styled-components';
import AdminSidebar from '../Element/Admin/AdminSidebar';
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

		> aside {
			flex-shrink: 0;
		}

		> main {
			flex-grow: 1;
		}
	`;
}
