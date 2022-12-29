import styled from 'styled-components';
import { Colors } from './colors';
import { Fonts } from './fonts';
import { BoxShadows } from './shadows';

export namespace SC {
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

	export const PdfBox = styled.div`
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
		}

		/* NO. */
		> div:first-of-type {
			${Fonts.bold23}
			color:${Colors.white};
			grid-column: 1/3;
			background-color: ${Colors.blue400};
			border-radius: 0.6rem 0.6rem 0 0;
			padding: 1.7rem 3rem;
		}

		> div:last-of-type {
		}

		/* Label */
		> div:nth-of-type(even) {
			${Fonts.medium16}
			padding-left: 3rem;
		}

		/* Content */
		> div:nth-of-type(odd) {
			word-break: break-all;
		}

		ul {
			padding-left: 1.65rem;

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
}
