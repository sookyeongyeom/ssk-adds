import styled from 'styled-components';
import { PrevToNewPdfProps } from '../../../@types/shared';
import { SC } from '../../../styles/styled';
import { svgRight } from '../../../styles/svgs';
import AdminButton from './AdminButton';

export default function PrevToNewPdf({
	pdfs,
	prevPdf,
	wishToDeletePdfKeys,
	onToggleToDeletePdfs,
}: PrevToNewPdfProps) {
	return (
		<S.PDF>
			{/* 기존 PDF */}
			{prevPdf ? (
				<S.Prev isWishedToDelete={wishToDeletePdfKeys.has(prevPdf.key) && !pdfs.length}>
					{prevPdf.name}
				</S.Prev>
			) : (
				<SC.Empty>PDF 없음</SC.Empty>
			)}
			{/* 새로운 PDF */}
			{!!pdfs.length && (
				<>
					<div>{svgRight}</div>
					{pdfs[0].name}
				</>
			)}
			{prevPdf && !pdfs.length && (
				<AdminButton
					onClick={() => onToggleToDeletePdfs(prevPdf.key)}
					isRed={wishToDeletePdfKeys.has(prevPdf.key)}
					isOrange>
					{wishToDeletePdfKeys.has(prevPdf.key) ? '기존 PDF 삭제 취소' : '기존 PDF 삭제하기'}
				</AdminButton>
			)}
		</S.PDF>
	);
}

namespace S {
	export const PDF = styled.div`
		display: flex;
		gap: 2rem;
		align-items: center;

		svg {
			position: relative;
			top: 0.2rem;
		}
	`;

	export const Prev = styled.div<PrevProps>`
		text-decoration: ${(props) => props.isWishedToDelete && 'line-through'};
	`;
}
