import Link from 'next/link';
import styled from 'styled-components';
import { Colors } from '../../styles/colors';

export default function LinkItem({ href, title, isCurrent }: LinkItemProps) {
	return (
		<S.CustomLink href={href} isCurrent={isCurrent}>
			<li id={href}>{title}</li>
		</S.CustomLink>
	);
}

namespace S {
	export const CustomLink = styled(Link)<CustomLinkProps>`
		> li {
			color: ${(props) => props.isCurrent && Colors.blue300};
		}
	`;
}
