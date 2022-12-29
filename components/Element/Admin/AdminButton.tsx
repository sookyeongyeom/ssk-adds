import styled from 'styled-components';
import { AdminButtonProps } from '../../../@types/shared';
import { Colors } from '../../../styles/colors';
import { Fonts } from '../../../styles/fonts';
import { css } from 'styled-components';

export default function AdminButton({ children, isOrange, isRed, onClick }: AdminButtonProps) {
	return (
		<S.AdminButtonLayout onClick={onClick} isOrange={isOrange} isRed={isRed}>
			{children}
		</S.AdminButtonLayout>
	);
}

namespace S {
	export const AdminButtonLayout = styled.button<AdminButtonLayoutProps>`
		${Fonts.bold14}
		background-color: ${Colors.blue400};
		color: ${Colors.white};
		border-radius: 0.6rem;
		padding: 1rem 1.2rem;
		transition: 0.3s ease;
		display: flex;
		align-items: center;

		> svg {
			position: relative;
			top: 0.05rem;

			> path {
				fill: ${Colors.white};
			}
		}

		&:hover {
			background-color: ${Colors.blue450};
		}

		&:active {
			background-color: ${Colors.blue475};
		}

		${(props) => props.isOrange && OrangeColor}
		${(props) => props.isRed && RedColor}
	`;

	const OrangeColor = css`
		background-color: ${Colors.orange300};

		&:hover {
			background-color: ${Colors.orange400};
		}

		&:active {
			background-color: ${Colors.orange500};
		}
	`;

	const RedColor = css`
		background-color: ${Colors.red300};

		&:hover {
			background-color: ${Colors.red400};
		}

		&:active {
			background-color: ${Colors.red500};
		}
	`;
}
