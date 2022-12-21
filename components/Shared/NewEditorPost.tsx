import dynamic from 'next/dynamic';
import { NewEditorPostProps } from '../../@types/shared';
import AdminButton from './AdminButton';
import Input from './Input';
import React from 'react';
import FileUploadElement from './FileUploadElement';

const Editor = dynamic(() => import('./Editor'), {
	ssr: false,
});

export default function NewEditorPost({
	title,
	writer,
	body,
	files,
	onChangeTitle,
	onChangeWriter,
	onChangeBody,
	onAddFile,
	onRemoveFile,
	onSubmit,
}: NewEditorPostProps) {
	return (
		<>
			<Input label={'제목'} value={title} onChange={onChangeTitle} />
			<Editor value={body} onChange={onChangeBody} />
			<FileUploadElement files={files} onAddFile={onAddFile} onRemoveFile={onRemoveFile} />
			<Input label={'관리자'} value={writer} onChange={onChangeWriter} />
			<AdminButton onClick={onSubmit}>완료</AdminButton>
		</>
	);
}
