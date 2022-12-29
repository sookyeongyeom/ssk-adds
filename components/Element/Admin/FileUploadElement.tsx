import { useState, useRef, MutableRefObject } from 'react';
import styled from 'styled-components';
import { FileUploadElementProps } from '../../../@types/shared';
import { Fonts } from '../../../styles/fonts';
import AdminButton from './AdminButton';
import { svgCancel } from '../../../styles/svgs';
import { Colors } from '../../../styles/colors';
import { v4 as uuidv4 } from 'uuid';

export default function FileUploadElement({
	files,
	prevFileKeys,
	wishToDeleteFileKeys,
	onAddFile,
	onRemoveFile,
	onToggleToDelete,
	isMultiple = false,
	isEditor = false,
}: FileUploadElementProps) {
	const [isDragOver, setIsDragOver] = useState(false);
	const fileRef = useRef() as MutableRefObject<HTMLInputElement>;
	const key = uuidv4();

	const onDragOverFile = (e: React.DragEvent) => {
		e.preventDefault();
		setIsDragOver(true);
	};

	const onDragLeaveFile = (e: React.DragEvent) => {
		e.preventDefault();
		setIsDragOver(false);
	};

	const onDragDropFile = (e: React.DragEvent) => {
		e.preventDefault();
		if (fileRef) {
			const files = Array.from(e.dataTransfer.files);
			onAddFile(files);
		}
		setIsDragOver(false);
	};

	const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			const files = Array.from(e.target.files);
			onAddFile(files);
			onResetFileTag();
		}
	};

	const onResetFileTag = () => {
		if (fileRef.current.files) {
			const dataTransfer = new DataTransfer();
			fileRef.current.files = dataTransfer.files;
		}
	};

	return (
		<S.FileUploadElementLayout>
			{isEditor && !!prevFileKeys?.length && onToggleToDelete && (
				<>
					<h3>기존 파일 ({prevFileKeys.length})</h3>
					{prevFileKeys.map((fileKey, i) => (
						<S.Prev
							key={i}
							isWishedToDelete={wishToDeleteFileKeys && wishToDeleteFileKeys.has(fileKey)}>
							<h4>{i + 1}</h4>
							<span>{fileKey}</span>
							<AdminButton onClick={() => onToggleToDelete(fileKey)} isRed>
								{svgCancel}
							</AdminButton>
						</S.Prev>
					))}
				</>
			)}
			<label htmlFor={key}>
				<S.DragAndDrop
					onDragOver={onDragOverFile}
					isDragOver={isDragOver}
					onDragLeave={onDragLeaveFile}
					onDrop={onDragDropFile}>
					{/* prettier-ignore */}
					<input type={'file'} ref={fileRef} onChange={onSelectFile} multiple={isMultiple} id={key} />
					Drag files here or click to upload
				</S.DragAndDrop>
			</label>
			{isEditor && !!files.length && <h3>새로운 파일 ({files.length})</h3>}
			{files!.map((file, i) => (
				<S.File key={i}>
					<h4>{i + 1}</h4>
					<span>{file.name}</span>
					<AdminButton onClick={() => onRemoveFile!(file.lastModified)} isOrange>
						{svgCancel}
					</AdminButton>
				</S.File>
			))}
		</S.FileUploadElementLayout>
	);
}

namespace S {
	export const FileUploadElementLayout = styled.div`
		grid-column: 2/3;
		padding-left: 0 !important;

		> h3 {
			${Fonts.bold16}
			margin: 0.7rem 0;

			&:last-of-type {
				margin-top: 2rem;
			}
		}

		button {
			width: 2rem;
			height: 2rem;
			padding: 0.3rem;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	`;

	export const DragAndDrop = styled.div<DragAndDropProps>`
		${Fonts.bold16}
		color:${Colors.orange400};
		width: 40rem;
		height: 20rem;
		border: 0.25rem dashed lightgray;
		border-radius: 0.6rem;
		background-color: ${(props) => props.isDragOver && Colors.orange100};
		border-color: ${(props) => props.isDragOver && Colors.orange400};
		transition: 0.3s ease;
		transition-property: background-color border-color;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		cursor: pointer;
		font-family: Arial;

		&:hover {
			background-color: ${Colors.orange100};
		}

		> input {
			display: none;
		}
	`;

	export const File = styled.div`
		display: flex;
		align-items: center;
		gap: 1.5rem;
		margin-top: 1.5rem;

		> h4 {
			${Fonts.medium18}
			color: ${Colors.orange400};
		}

		> span {
			${Fonts.regular14}
		}
	`;

	export const Prev = styled(File)<PrevProps>`
		&:nth-of-type(3) {
			margin-bottom: 1.5rem;
		}

		> h4 {
			color: ${Colors.red400};
		}

		> span {
			text-decoration: ${(props) => props.isWishedToDelete && 'line-through'};
			text-decoration-thickness: 0.25rem;
			text-decoration-color: ${Colors.red400};
		}
	`;
}
