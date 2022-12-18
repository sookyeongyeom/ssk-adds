import styled from 'styled-components';
import StoreProvider from '../Provider/StoreProvider';

export default function LoginLayout({ children }: ChildrenType) {
	return (
		<StoreProvider>
			<S.Layout>
				<main>{children}</main>
			</S.Layout>
		</StoreProvider>
	);
}

namespace S {
	export const Layout = styled.div``;
}
