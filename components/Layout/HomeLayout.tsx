import styled from 'styled-components';
import Footer from '../Element/Adds/Footer';
import Header from '../Element/Adds/Header';
import { Devices } from '../../styles/devices';
import { Sizes } from '../../styles/sizes';
import Drawer from '../Element/Adds/Drawer';
import { useState, useEffect, useRef, MutableRefObject } from 'react';
import useTitlePath from '../../hooks/useTitlePath';
import useOutsideClick from '../../hooks/useOutsideClick';

export default function HomeLayout({ children }: ChildrenType) {
	const { path } = useTitlePath();
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const drawerRef = useRef() as MutableRefObject<HTMLDivElement>;

	const onOpenDrawer = (e: React.MouseEvent) => {
		e.stopPropagation();
		setIsDrawerOpen(true);
	};

	const onCloseDrawer = () => setIsDrawerOpen(false);

	useOutsideClick(drawerRef, onCloseDrawer);

	useEffect(() => {
		onCloseDrawer();
	}, [path]);

	return (
		<S.Layout>
			<Header onOpenDrawer={onOpenDrawer} />
			<Drawer isDrawerOpen={isDrawerOpen} drawerRef={drawerRef} />
			<main>{children}</main>
			<Footer />
		</S.Layout>
	);
}

namespace S {
	export const Layout = styled.div`
		min-height: 100vh;
		position: relative;

		@media ${Devices.desktop} {
			> main {
				padding-bottom: ${Sizes.desktopFooterHeight};
			}
		}

		@media ${Devices.mobile} {
			width: 100vw;
			overflow: hidden;

			> main {
				padding-top: ${Sizes.desktopHeaderHeight};
			}
		}
	`;
}
