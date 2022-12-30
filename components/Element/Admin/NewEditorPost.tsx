import dynamic from 'next/dynamic';
import { NewEditorPostProps } from '../../../@types/shared';
import AdminButton from './AdminButton';
import Input from '../Shared/Input';
import React, { MutableRefObject, useRef } from 'react';
import FileUploadElement from './FileUploadElement';
import { SC } from '../../../styles/styled';
import styled from 'styled-components';
import useValidation from '../../../hooks/useValidation';

const Editor = dynamic(() => import('./Editor'), {
	ssr: false,
});

export default function NewEditorPost({
	title,
	writer,
	body,
	files,
	prevFiles,
	wishToDeleteFileKeys,
	onChangeTitle,
	onChangeWriter,
	onChangeBody,
	onAddFile,
	onRemoveFile,
	onSubmit,
	onToggleToDelete,
}: NewEditorPostProps) {
	const titleRef = useRef() as MutableRefObject<HTMLInputElement>;
	const writerRef = useRef() as MutableRefObject<HTMLInputElement>;

	const required = [
		{ value: title, name: '제목', ref: titleRef },
		{ value: writer, name: '작성자', ref: writerRef },
	];

	const onValidation = useValidation(onSubmit, required);

	return (
		/* prettier-ignore */
		<>
			<SC.AlignButtonRight>
				<AdminButton onClick={onValidation} isOrange>작성 완료</AdminButton>
			</SC.AlignButtonRight>
			<S.NewEditorPostLayout>
				<Input value={title} onChange={onChangeTitle} placeholder={'제목'} inputRef={titleRef} maxLength={100} />
				<Input value={writer} onChange={onChangeWriter} placeholder={'작성자'} inputRef={writerRef} maxLength={15} />
				<Editor value={body} onChange={onChangeBody} />
				<FileUploadElement
					files={files}
					prevFiles={prevFiles}
					onAddFile={onAddFile}
					onRemoveFile={onRemoveFile}
					onToggleToDelete={onToggleToDelete}
					wishToDeleteFileKeys={wishToDeleteFileKeys}
					isMultiple
					isEditor
				/>
			</S.NewEditorPostLayout>
		</>
	);
}

namespace S {
	export const NewEditorPostLayout = styled.div`
		display: grid;
		grid-template-columns: 2fr 1fr 1fr;
		gap: 1rem;

		> div:first-of-type,
		> div:nth-of-type(2) {
			> input {
				width: 100%;
			}
		}

		> div:first-of-type {
			> input {
				min-width: 33.33rem;
			}
		}

		> div:nth-of-type(2) {
			> input {
				min-width: 16.67rem;
			}
		}

		> div:nth-of-type(3) {
			grid-column: 1/3;
		}

		> div:nth-of-type(4) {
			grid-column: 3/4;
		}
	`;
}
