import Sidebar from '../Element/Adds/Sidebar';
import styled from 'styled-components';
import { Fonts } from '../../styles/fonts';
import useTitlePath from '../../hooks/useTitlePath';
import { Devices } from '../../styles/devices';
import { Paths } from '../../constants/paths';

export default function AddsLayout({ children }: ChildrenType) {
	const { title, path } = useTitlePath();
	return (
		<S.Layout hasPadding={path !== Paths.intro}>
			<Sidebar path={path}></Sidebar>
			<h1>{title}</h1>
			<section>{children}</section>
		</S.Layout>
	);
}

namespace S {
	export const Layout = styled.div<hasPaddingType>`
		width: fit-content;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 17rem 99.5rem;
		column-gap: 6.6rem;
		row-gap: 3.8rem;
		padding-top: 3.9rem;
		padding-bottom: 10rem;

		> aside {
			grid-row: 2/3;
		}

		> h1 {
			${Fonts.regular40}
			grid-column: 2/3;
		}

		@media ${Devices.mobile} {
			width: 100%;
			display: flex;
			flex-direction: column;
			padding-bottom: 7.7rem;

			> aside {
				display: none;
			}

			> h1 {
				${Fonts.regular25}
				padding-left: 2rem;
			}

			> section {
				padding: ${(props) => props.hasPadding && '0 2rem'};
			}
		}
	`;
}
