import useInput from '../../../hooks/useInput';
import { getResourceById, putResource } from '../../../api/resource';
import useEditorBody from '../../../hooks/useEditorBody';
import NewEditorPost from '../../Element/Admin/NewEditorPost';
import useFiles from '../../../hooks/useFiles';
import { S3Folders } from '../../../constants/s3';
import { useEffect, useState } from 'react';
import useGet from '../../../hooks/useGet';
import { ResponseResource } from '../../../@types/api/resource';
import pickFileKeysToArrayFromFileString from '../../../utils/pickFileKeysToArrayFromFileString';
import excludeDeletedFileKeysFromFileString from '../../../utils/excludeDeletedFileKeysFromFileString';

export default function ResourceEditPage({ id }: ViewPageProps) {
	const [resource, setResource] = useState<ResponseResource.GetById>();

	useEffect(() => {
		if (id) useGet(() => getResourceById({ id }), setResource);
	}, [id]);

	return <>{resource && <ResourceEditPageInnerShell id={id} resource={resource} />}</>;
}

function ResourceEditPageInnerShell({
	id,
	resource,
}: EditPageInnerShellProps<ResponseResource.GetById>) {
	const prevFileKeys = resource?.file && pickFileKeysToArrayFromFileString(resource?.file);
	const { value: title, onChange: onChangeTitle } = useInput(resource?.title);
	const { value: writer, onChange: onChangeWriter } = useInput(resource?.writer);
	const { body, onChangeBody } = useEditorBody(resource?.body);
	const { files, onAddFile, onRemoveFile, onUploadFile, onDeleteFile, onToggleToDelete } = useFiles(
		S3Folders.resource,
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
			!!resource &&
			!!deletedFileKeys &&
			excludeDeletedFileKeysFromFileString(resource.file, deletedFileKeys);

		/* PUT */
		const res = await putResource({
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
