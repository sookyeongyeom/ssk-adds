import Link from 'next/link';
import styled from 'styled-components';
import { Colors } from '../../styles/colors';

export default function LinkItem({ href, title, isCurrent }: LinkItemProps) {
	return (
		<Link href={href}>
			<S.Item id={href} isCurrent={isCurrent}>
				{title}
			</S.Item>
		</Link>
	);
}

namespace S {
	export const Item = styled.li<ItemProps>`
		color: ${(props) => props.isCurrent && Colors.blue300};
	`;
}
