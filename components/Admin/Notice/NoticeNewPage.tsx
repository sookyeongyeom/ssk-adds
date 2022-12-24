import useInput from '../../../hooks/useInput';
import useEditorBody from '../../../hooks/useEditorBody';
import NewEditorPost from '../../Element/Admin/NewEditorPost';
import { postNotice } from '../../../api/notice';
import useFiles from '../../../hooks/useFiles';
import { S3Folders } from '../../../constants/s3';

export default function NoticeNewPage() {
	const { value: title, onChange: onChangeTitle } = useInput();
	const { value: writer, onChange: onChangeWriter } = useInput();
	const { body, onChangeBody } = useEditorBody();
	const { files, onAddFile, onRemoveFile, onUploadFile } = useFiles(S3Folders.notice);

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
		const res = await postNotice({
			writer,
			title,
			body,
			file: JSON.stringify(fileData),
			createdDate: new Date().toISOString().split('T')[0],
		});
		console.log(res);
	};

	return (
		<>
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
