import { useState, useRef, MutableRefObject } from 'react';
import styled from 'styled-components';
import { FileUploadElementProps } from '../../@types/shared';
import AdminButton from './AdminButton';

export default function FileUploadElement({
	files,
	prevFileKeys,
	onAddFile,
	onRemoveFile,
	onToggleToDelete,
}: FileUploadElementProps) {
	const [isDragOver, setIsDragOver] = useState(false);
	const fileRef = useRef() as MutableRefObject<HTMLInputElement>;

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
			<input type={'file'} ref={fileRef} onChange={onSelectFile} multiple />
			{prevFileKeys &&
				onToggleToDelete &&
				prevFileKeys.map((fileKey, i) => (
					<div onClick={() => onToggleToDelete(fileKey)} key={i}>
						{fileKey}
					</div>
				))}
			<S.DragAndDrop
				onDragOver={onDragOverFile}
				isDragOver={isDragOver}
				onDragLeave={onDragLeaveFile}
				onDrop={onDragDropFile}>
				드래그앤드롭
			</S.DragAndDrop>
			{files!.map((file, i) => (
				<div key={i}>
					{file.name}
					<AdminButton onClick={() => onRemoveFile!(file.lastModified)}>X</AdminButton>
				</div>
			))}
		</S.FileUploadElementLayout>
	);
}

namespace S {
	export const FileUploadElementLayout = styled.div`
		border: 0.1rem solid lightgray;
		padding: 1rem;
	`;

	export const DragAndDrop = styled.div<DragAndDropProps>`
		width: 30rem;
		height: 30rem;
		background-color: ${(props) => (props.isDragOver ? 'pink' : 'lightblue')};
	`;
}
