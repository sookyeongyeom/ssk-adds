import { useState, useEffect } from 'react';
import { AdminNewEditProps } from '../../../@types/shared';
import { SC } from '../../../styles/styled';
import AdminButton from './AdminButton';

export default function AdminNewEdit({ children, onSubmit }: AdminNewEditProps) {
	const [isEdit, setIsEdit] = useState(false);

	useEffect(() => {
		const isEdit = /^.*(edit).*/.test(window.location.pathname);
		setIsEdit(isEdit);
	}, []);

	return (
		<>
			<SC.AlignButtonRight>
				<AdminButton onClick={onSubmit} isOrange>
					{isEdit ? '수정 완료' : '작성 완료'}
				</AdminButton>
			</SC.AlignButtonRight>
			<SC.AdminNewEditGrid>
				<div>{isEdit ? 'EDIT' : 'NEW'}</div>
				{children}
			</SC.AdminNewEditGrid>
		</>
	);
}
