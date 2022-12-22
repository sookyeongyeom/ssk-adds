import styled from 'styled-components';
import Footer from '../Element/Adds/Footer';
import Header from '../Element/Adds/Header';
import { Sizes } from '../../styles/sizes';

export default function HomeLayout({ children }: ChildrenType) {
	return (
		<S.Layout>
			<Header />
			<main>{children}</main>
			<Footer />
		</S.Layout>
	);
}

namespace S {
	export const Layout = styled.div`
		min-height: 100vh;
		position: relative;

		> main {
			padding-bottom: ${Sizes.desktopFooterHeight};
		}
	`;
}
