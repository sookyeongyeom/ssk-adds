import useInput from '../../../hooks/useInput';
import useEditorBody from '../../../hooks/useEditorBody';
import NewEditorPost from '../../Shared/NewEditorPost';
import useFiles from '../../../hooks/useFiles';
import { S3Folders } from '../../../constants/s3';
import { useEffect, useState } from 'react';
import useGet from '../../../hooks/useGet';
import pickFileKeysToArrayFromFileString from '../../../utils/pickFileKeysToArrayFromFileString';
import excludeDeletedFileKeysFromFileString from '../../../utils/excludeDeletedFileKeysFromFileString';
import { ResponseNotice } from '../../../@types/api/notice';
import { getNoticeById, putNotice } from '../../../api/notice';

export default function NoticeEditPage({ id }: ViewPageProps) {
	const [notice, setNotice] = useState<ResponseNotice.GetById>();

	useEffect(() => {
		if (id) useGet(() => getNoticeById({ id }), setNotice);
	}, [id]);

	return <>{notice && <NoticeEditPageInnerShell id={id} notice={notice} />}</>;
}

function NoticeEditPageInnerShell({ id, notice }: EditPageInnerShellProps<ResponseNotice.GetById>) {
	const prevFileKeys = notice?.file && pickFileKeysToArrayFromFileString(notice?.file);
	const { value: title, onChange: onChangeTitle } = useInput(notice?.title);
	const { value: writer, onChange: onChangeWriter } = useInput(notice?.writer);
	const { body, onChangeBody } = useEditorBody(notice?.body);
	const { files, onAddFile, onRemoveFile, onUploadFile, onDeleteFile, onToggleToDelete } = useFiles(
		S3Folders.notice,
	);

	const onSubmit = async () => {
		/* S3 파일 삭제 */
		let deletedFileKeys: string[] | undefined;
		try {
			deletedFileKeys = await onDeleteFile();
			console.log(deletedFileKeys);
		} catch (e) {
			console.log(e);
			return;
		}

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

		const manipulatedPrevfiles =
			!!notice &&
			!!deletedFileKeys &&
			excludeDeletedFileKeysFromFileString(notice.file, deletedFileKeys);

		/* PUT */
		const res = await putNotice({
			id,
			writer,
			title,
			body,
			file: JSON.stringify([...(manipulatedPrevfiles || []), ...fileData]),
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
				prevFileKeys={prevFileKeys}
				onChangeTitle={onChangeTitle}
				onChangeWriter={onChangeWriter}
				onChangeBody={onChangeBody}
				onAddFile={onAddFile}
				onRemoveFile={onRemoveFile}
				onSubmit={onSubmit}
				onToggleToDelete={onToggleToDelete}
			/>
		</>
	);
}
