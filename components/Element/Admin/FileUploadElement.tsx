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
	onAddFile,
	onRemoveFile,
	onToggleToDelete,
	isMultiple = false,
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
			{prevFileKeys &&
				onToggleToDelete &&
				prevFileKeys.map((fileKey, i) => (
					<div onClick={() => onToggleToDelete(fileKey)} key={i}>
						{fileKey}
					</div>
				))}
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
			<h3>New Files ({files.length})</h3>
			{files!.map((file, i) => (
				<S.File key={i}>
					<h4>{i + 1}</h4>
					<span>{file.name}</span>
					<AdminButton onClick={() => onRemoveFile!(file.lastModified)}>{svgCancel}</AdminButton>
				</S.File>
			))}
		</S.FileUploadElementLayout>
	);
}

namespace S {
	export const FileUploadElementLayout = styled.div`
		border: 0.1rem solid lightgray;
		padding: 1rem;

		> h3 {
			${Fonts.bold18}
			margin: 2.5rem 0 1rem 0;
			font-family: Arial;
		}
	`;

	export const DragAndDrop = styled.div<DragAndDropProps>`
		${Fonts.bold16}
		color:${Colors.blue400};
		width: 40rem;
		height: 20rem;
		border: 0.25rem dashed lightgray;
		border-radius: 0.6rem;
		background-color: ${(props) => props.isDragOver && Colors.blue100};
		border-color: ${(props) => props.isDragOver && Colors.blue400};
		transition: 0.3s ease;
		transition-property: background-color border-color;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		cursor: pointer;
		font-family: Arial;

		&:hover {
			background-color: ${Colors.blue100};
		}

		> input {
			display: none;
		}
	`;

	export const File = styled.div`
		display: flex;
		align-items: center;
		gap: 1.5rem;
		margin: 1rem 0;

		&:last-of-type {
			margin: 0;
		}

		> h4 {
			${Fonts.medium18}
			color: ${Colors.blue400};
		}

		> span {
			${Fonts.regular14}
		}

		> button {
			width: 2rem;
			height: 2rem;
			padding: 0.3rem;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	`;
}
