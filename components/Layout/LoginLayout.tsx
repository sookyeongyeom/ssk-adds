import styled from 'styled-components';

export default function LoginLayout({ children }: ChildrenType) {
	return (
		<S.Layout>
			<main>{children}</main>
		</S.Layout>
	);
}

namespace S {
	export const Layout = styled.div``;
}
