import { AdminViewProps } from '../../../@types/shared';
import styled from 'styled-components';
import { SC } from '../../../styles/styled';
import AdminButton from './AdminButton';
import AdminBoardButton from '../Shared/AdminBoardButton';

export default function AdminView({ children, id, basePath, onEdit, onDelete }: AdminViewProps) {
	const isContact = !onDelete;
	return (
		<S.AdminViewLayout>
			<SC.AlignButtonRight>
				<AdminButton onClick={onEdit}>수정</AdminButton>
				{isContact || <AdminButton onClick={onDelete}>삭제</AdminButton>}
			</SC.AlignButtonRight>
			<SC.AdminViewGrid>
				<div>NO.{id}</div>
				{children}
			</SC.AdminViewGrid>
			{isContact || (
				<SC.AlignButtonRight>
					<AdminBoardButton boardPath={basePath} />
				</SC.AlignButtonRight>
			)}
		</S.AdminViewLayout>
	);
}

namespace S {
	export const AdminViewLayout = styled.div``;
}
