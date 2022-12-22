import styled from 'styled-components';
import { svgMenu } from '../../../styles/svgs';
import { Colors } from '../../../styles/colors';
import { Fonts } from '../../../styles/fonts';
import { BoardButtonProps } from '../../../@types/shared';
import { useRouter } from 'next/router';

export default function BoardButton({ boardPath }: BoardButtonProps) {
	const router = useRouter();

	const onClick = () => router.push(boardPath);

	return <S.BoardButtonLayout onClick={onClick}>{svgMenu}목록</S.BoardButtonLayout>;
}

namespace S {
	export const BoardButtonLayout = styled.button`
		${Fonts.light14}
		display: flex;
		align-items: center;
		gap: 0.67rem;
		padding: 0.8rem 1.7rem;
		border: 0.1rem solid ${Colors.gray150};
		margin-left: auto;
		margin-bottom: 1.8rem;
	`;
}
