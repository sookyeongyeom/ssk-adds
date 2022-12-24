import styled from 'styled-components';
import { Sizes } from '../../styles/sizes';
import AdminHeader from '../Element/Admin/AdminHeader';
import AdminSidebar from '../Element/Admin/AdminSidebar';
import StoreProvider from '../Provider/StoreProvider';
import { useState } from 'react';

export default function AdminLayout({ children }: ChildrenType) {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);
	const onToggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
	return (
		<StoreProvider>
			<S.Layout isSidebarOpen={isSidebarOpen}>
				<AdminSidebar isSidebarOpen={isSidebarOpen} />
				<div>
					<AdminHeader onToggleSidebar={onToggleSidebar} />
					<main>{children}</main>
				</div>
			</S.Layout>
		</StoreProvider>
	);
}

namespace S {
	export const Layout = styled.div<SidebarToggleProps>`
		min-height: 100vh;
		display: flex;

		> aside {
			flex-shrink: 0;
		}

		> div {
			flex-grow: 1;
			margin-left: ${(props) => (props.isSidebarOpen ? Sizes.desktopAdminSidebarWidth : '0')};
			transition: 0.5s ease;
		}
	`;
}
