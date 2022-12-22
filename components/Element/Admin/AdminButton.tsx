import styled from 'styled-components';
import { AdminButtonProps } from '../../../@types/shared';
import { Colors } from '../../../styles/colors';

export default function AdminButton({ children, onClick }: AdminButtonProps) {
	return <S.AdminButtonLayout onClick={onClick}>{children}</S.AdminButtonLayout>;
}

namespace S {
	export const AdminButtonLayout = styled.button`
		background-color: ${Colors.blue250};
		padding: 1rem;
	`;
}
