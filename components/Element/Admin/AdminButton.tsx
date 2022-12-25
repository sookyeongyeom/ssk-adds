import styled from 'styled-components';
import { AdminButtonProps } from '../../../@types/shared';
import { Colors } from '../../../styles/colors';
import { Fonts } from '../../../styles/fonts';

export default function AdminButton({ children, onClick }: AdminButtonProps) {
	return <S.AdminButtonLayout onClick={onClick}>{children}</S.AdminButtonLayout>;
}

namespace S {
	export const AdminButtonLayout = styled.button`
		${Fonts.medium14}
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
	`;
}
