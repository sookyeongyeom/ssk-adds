import useInput from '../../../hooks/useInput';
import { postResource } from '../../../api/resource';
import useEditorBody from '../../../hooks/useEditorBody';
import NewEditorPost from '../../Shared/NewEditorPost';
import { useRef, MutableRefObject, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { uploadFileToS3 } from '../../../s3/index';
import { S3Folders } from '../../../constants/s3';

export default function ResourceNewPage() {
	const { value: title, onChange: onChangeTitle } = useInput();
	const { value: writer, onChange: onChangeWriter } = useInput();
	const { body, onChangeBody } = useEditorBody();
	const [files, setFiles] = useState<File[]>([]);
	const fileRef = useRef() as MutableRefObject<HTMLInputElement>;

	const onApplyFile = () => {
		if (fileRef.current.files) {
			const files = Array.from(fileRef.current.files);
			setFiles(files);
		}
	};

	const onAddFile = () => {
		if (fileRef.current.files) {
			const includeNewFiles = [...files, ...Array.from(fileRef.current.files)];
			const dataTransfer = new DataTransfer();
			Array.from(includeNewFiles).forEach((file) => dataTransfer.items.add(file));
			fileRef.current.files = dataTransfer.files;
			onApplyFile();
		}
	};

	const onRemoveFile = (targetLastModified: number) => {
		const dataTransfer = new DataTransfer();
		const files = fileRef.current.files || [];
		Array.from(files)
			.filter((file) => file.lastModified !== targetLastModified)
			.forEach((file) => dataTransfer.items.add(file));
		fileRef.current.files = dataTransfer.files;
		onApplyFile();
	};

	const onSubmit = async () => {
		/* S3 파일 업로드 */
		let fileNames: string[] = [];
		if (files?.length) {
			const promises = files.map((file) => {
				const fileName = uuidv4();
				fileNames.push(fileName);
				return uploadFileToS3(S3Folders.resource, fileName, file);
			});
			try {
				await Promise.all(promises);
			} catch (e) {
				console.log(e);
				return;
			}
		}

		/* POST */
		const res = await postResource({
			writer,
			title,
			body,
			file: fileNames.join(','),
			created_date: new Date().toISOString().split('T')[0],
		});
		console.log(res);
	};

	return (
		<>
			새로운자료안내
			<NewEditorPost
				title={title}
				body={body}
				writer={writer}
				files={files}
				fileRef={fileRef}
				onChangeTitle={onChangeTitle}
				onChangeWriter={onChangeWriter}
				onChangeBody={onChangeBody}
				onAddFile={onAddFile}
				onRemoveFile={onRemoveFile}
				onSubmit={onSubmit}
			/>
		</>
	);
}
