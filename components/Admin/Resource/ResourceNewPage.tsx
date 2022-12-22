import useInput from '../../../hooks/useInput';
import { postResource } from '../../../api/resource';
import useEditorBody from '../../../hooks/useEditorBody';
import NewEditorPost from '../../Element/Admin/NewEditorPost';
import useFiles from '../../../hooks/useFiles';
import { S3Folders } from '../../../constants/s3';

export default function ResourceNewPage() {
	const { value: title, onChange: onChangeTitle } = useInput();
	const { value: writer, onChange: onChangeWriter } = useInput();
	const { body, onChangeBody } = useEditorBody();
	const { files, onAddFile, onRemoveFile, onUploadFile } = useFiles(S3Folders.resource);

	const onSubmit = async () => {
		/* S3 파일 업로드 */
		let fileData: FileDataType[] = [];
		if (files?.length) {
			try {
				fileData = await onUploadFile();
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
			file: JSON.stringify(fileData),
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
