import styled, { css } from 'styled-components';
import { Colors } from './colors';
import { Devices } from './devices';
import { Fonts } from './fonts';
import { Sizes } from './sizes';

export namespace SC {
	export const AlignSelectBoxForBoard = css`
		> div:first-of-type {
			margin-left: auto;
			margin-bottom: 1rem;
		}
	`;

	export const PrevImage = styled.div`
		width: 15rem;
		height: 18rem;

		> img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	`;

	export const Keywords = styled.div`
		display: flex;
		flex-direction: column;
		width: fit-content;
		gap: 0.5rem;
		margin-bottom: 1rem;
	`;

	export const Keyword = styled.input`
		border: 0.1rem solid black;
		padding: 0.5rem;
	`;

	export const AlignButtonRight = styled.div`
		display: flex;
		justify-content: flex-end;
		margin: 1rem 0;
		gap: 0.5rem;
	`;

	export const ImageBox = styled.div`
		width: 16.2rem;
		height: 21.6rem;

		> img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	`;

	export const LinkHighlight = styled.div`
		width: fit-content;
		background: linear-gradient(to top, ${Colors.blue200} 40%, transparent 40%);
		border-radius: 0 !important;

		> a {
			${Fonts.medium16}
			color:${Colors.blue400};
			display: flex;
			align-items: center;
			gap: 0.3rem;
			transition: 0.3s ease;

			> svg {
				position: relative;
				top: 0.1rem;

				path {
					transition: 0.3s ease;
					fill: ${Colors.blue400};
				}
			}
		}

		&:hover {
			> a {
				color: ${Colors.blue450};

				> svg path {
					fill: ${Colors.blue450};
				}
			}
		}
	`;

	export const Empty = styled.div`
		color: ${Colors.gray150};
		font-style: italic;
	`;

	export const AdminViewGrid = styled.div`
		display: grid;
		grid-template-columns: max-content 1fr;
		margin: 0 auto;
		background-color: ${Colors.white};
		border-radius: 0.6rem;
		row-gap: 3rem;
		column-gap: 6rem;
		padding-bottom: 3rem;

		> div {
			line-height: 120%;
			border-radius: 0 0 0.6rem 0.6rem;
			word-break: break-all;
		}

		/* NO. */
		> div:first-of-type {
			${Fonts.bold20}
			color:${Colors.white};
			grid-column: 1/3;
			background-color: ${Colors.blue400};
			border-radius: 0.6rem 0.6rem 0 0;
			padding: 1.7rem 3rem;
		}

		ul {
			padding-left: 1.8rem;

			> li {
				list-style-type: decimal;
				margin: 0.7rem 0;

				&:first-of-type {
					margin-top: 0;
				}

				&:last-of-type {
					margin-bottom: 0;
				}
			}
		}
	`;

	export const AdminNewEditGrid = styled(AdminViewGrid)`
		align-items: center;

		> div:first-of-type {
			background-color: ${Colors.orange300};
		}
	`;

	export const Label = styled.h3`
		${Fonts.bold16}
		padding-left: 3rem;
		line-height: 120%;
	`;

	export const Required = styled.span`
		color: ${Colors.red400};
		margin-left: 0.3rem;
	`;

	export const ShowIfMobile = styled.div`
		display: none;

		@media ${Devices.mobile} {
			display: block;
		}
	`;

	export const PaperNewsPageLayout = styled.div`
		${SC.AlignSelectBoxForBoard}

		>div:nth-of-type(2) {
			display: flex;
			flex-direction: column;
			gap: 4rem;
			margin-top: 2rem;

			> div:last-of-type {
				margin-top: calc(${Sizes.desktopPageButtonMarginTop} - 4rem);
			}
		}
	`;

	export const PaperNewsBox = styled.div`
		display: grid;
		grid-template-columns: 3rem 64rem 1fr;
		column-gap: 1rem;
		row-gap: 0.4rem;

		> h2 {
			${Fonts.medium18}
			color:${Colors.blue300};
			position: relative;
			top: 0.3rem;
		}

		> h3 {
			${Fonts.medium16}
			line-height:140%
		}

		> h4 {
			${Fonts.light14}
			line-height: 140%;
			grid-row: 2/2;
			grid-column: 2/3;
		}

		> ul {
			grid-row: 1/4;
			grid-column: 3/4;
			position: relative;
			top: -0.5rem;
			margin-left: 0.8rem;

			> li {
				${Fonts.regular14}
				background-color: ${Colors.blue275};
				color: ${Colors.white};
				border-radius: 1.3rem;
				padding: 0.6rem 1.1rem;
				padding-bottom: 0.7rem;
				width: fit-content;
				display: inline-block;
				margin: 0.4rem;
			}
		}

		@media ${Devices.mobile} {
			grid-template-columns: 3rem 1fr;
			row-gap: 0.5rem;

			> h2 {
				text-align: center;
			}

			> h4 {
				grid-column: 2/4;
			}

			> ul {
				top: 0;
				margin: 0;
				margin-top: 0.3rem;
				grid-row: 3/4;
				grid-column: 2/4;
				display: flex;
				align-items: center;
				flex-wrap: wrap;
				gap: 0.8rem 1rem;

				> li {
					margin: 0;
				}
			}
		}
	`;
}
