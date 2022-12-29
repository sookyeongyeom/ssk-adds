import useInput from '../../../hooks/useInput';
import useFiles from '../../../hooks/useFiles';
import { S3Folders } from '../../../constants/s3';
import { getMemberById, putMember } from '../../../api/member';
import FileUploadElement from '../../Element/Admin/FileUploadElement';
import { EditPageInnerShellProps, ViewPageProps } from '../../../@types/pages';
import { useEffect, useState } from 'react';
import { ResponseMember } from '../../../@types/api/member';
import useGet from '../../../hooks/useGet';
import excludeDeletedFileKeysFromFileString from '../../../utils/excludeDeletedFileKeysFromFileString';
import pickFileKeysToArrayFromFileString from '../../../utils/pickFileKeysToArrayFromFileString';
import { Paths } from '../../../constants/paths';
import useRoute from '../../../hooks/useRoute';
import MemberNewEdit from './MemberNewEdit';
import PrevToNewImage from '../../Element/Admin/PrevToNewImage';
import { SC } from '../../../styles/styled';

export default function MemberEditPage({ id }: ViewPageProps) {
	const [member, setMember] = useState<ResponseMember.GetById>();

	useEffect(() => {
		if (id !== undefined && !isNaN(id)) useGet(() => getMemberById({ id }), setMember);
	}, [id]);

	return <>{member && <MemberEditPageInnerShell id={id} data={member} />}</>;
}

function MemberEditPageInnerShell({
	id,
	data,
}: Omit<EditPageInnerShellProps<ResponseMember.GetById>, 'path'>) {
	const prevFileKey = data?.img && pickFileKeysToArrayFromFileString(data.img)[0];
	const { value: name, onChange: onChangeName } = useInput(data?.name);
	const { value: email, onChange: onChangeEmail } = useInput(data?.email);
	const { value: homepage, onChange: onChangeHomepage } = useInput(data?.homepage);
	const { value: phoneNumber, onChange: onChangePhoneNumber } = useInput(data?.phoneNumber);
	const { value: introBody, onChange: onChangeIntroBody } = useInput(data?.introBody);
	const { value: jobTitle, onChange: onChangeJobTitle } = useInput(data?.jobTitle);
	/* prettier-ignore */
	const { value: responsibility, onChange: onChangeResponsibility } = useInput(data?.responsibility);
	const {
		files,
		onAddFile,
		onRemoveFile,
		onUploadFile,
		onDeleteFile,
		onSelectSingleToDelete,
		onResetDeleteWishList,
		onToggleToDelete,
		wishToDeleteFileKeys,
	} = useFiles(S3Folders.member, false);
	const { onRouteToPath } = useRoute(Paths.admin + Paths.member + `/${id}`);

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
			excludeDeletedFileKeysFromFileString(data.img, deletedFileKeys);

		/* PUT */
		const res = await putMember({
			id,
			name,
			email,
			homepage,
			phoneNumber,
			introBody,
			jobTitle,
			img: JSON.stringify([...(manipulatedPrevfiles || []), ...fileData]),
			responsibility,
		});
		console.log(res);
		onRouteToPath();
	};

	useEffect(() => {
		if (files.length) {
			onSelectSingleToDelete(prevFileKey);
			return;
		}
		onResetDeleteWishList();
	}, [files]);

	return (
		<>
			<MemberNewEdit
				name={name}
				email={email}
				homepage={homepage}
				phoneNumber={phoneNumber}
				introBody={introBody}
				jobTitle={jobTitle}
				responsibility={responsibility}
				onChangeName={onChangeName}
				onChangeEmail={onChangeEmail}
				onChangeHomepage={onChangeHomepage}
				onChangePhoneNumber={onChangePhoneNumber}
				onChangeIntroBody={onChangeIntroBody}
				onChangeJobTitle={onChangeJobTitle}
				onChangeResponsibility={onChangeResponsibility}
				onSubmit={onSubmit}>
				<SC.Label>사진</SC.Label>
				<PrevToNewImage
					prevFileKey={prevFileKey}
					wishToDeleteFileKeys={wishToDeleteFileKeys}
					files={files}
					folder={S3Folders.member}
					onToggleToDelete={onToggleToDelete}
				/>
				<FileUploadElement files={files} onAddFile={onAddFile} onRemoveFile={onRemoveFile} />
			</MemberNewEdit>
		</>
	);
}
