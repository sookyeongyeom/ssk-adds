import { ResponseNotice } from '../../../@types/api/notice';
import { ResponseResource } from '../../../@types/api/resource';
import { EditPageInnerShellProps } from '../../../@types/pages';
import useEditorBody from '../../../hooks/useEditorBody';
import useFiles from '../../../hooks/useFiles';
import useInput from '../../../hooks/useInput';
import excludeDeletedFileKeysFromFileString from '../../../utils/excludeDeletedFileKeysFromFileString';
import pickFileKeysToArrayFromFileString from '../../../utils/pickFileKeysToArrayFromFileString';
import NewEditorPost from './NewEditorPost';
import { S3Folders } from '../../../constants/s3';
import { Paths } from '../../../constants/paths';
import { putResource } from '../../../api/resource';
import { putNotice } from '../../../api/notice';
import useRoute from '../../../hooks/useRoute';

export default function EditPageInnerShell<
	T extends ResponseResource.GetById | ResponseNotice.GetById,
>({ id, data, path }: EditPageInnerShellProps<T>) {
	const folder = path === Paths.notice ? S3Folders.notice : S3Folders.resource;
	const api = path === Paths.notice ? putNotice : putResource;
	const prevFileKeys = data?.file && pickFileKeysToArrayFromFileString(data?.file);

	const { value: title, onChange: onChangeTitle } = useInput(data?.title);
	const { value: writer, onChange: onChangeWriter } = useInput(data?.writer);
	const { body, onChangeBody } = useEditorBody(data?.body);
	const { files, onAddFile, onRemoveFile, onUploadFile, onDeleteFile, onToggleToDelete } =
		useFiles(folder);
	const { onRouteToPath } = useRoute(Paths.admin + path + `/${id}`);

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
			!!data &&
			!!deletedFileKeys &&
			excludeDeletedFileKeysFromFileString(data.file, deletedFileKeys);

		/* PUT */
		const res = await api({
			id,
			writer,
			title,
			body,
			file: JSON.stringify([...(manipulatedPrevfiles || []), ...fileData]),
			createdDate: data?.createdDate || new Date().toISOString().split('T')[0],
		});
		console.log(res);
		onRouteToPath();
	};

	return (
		<>
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
