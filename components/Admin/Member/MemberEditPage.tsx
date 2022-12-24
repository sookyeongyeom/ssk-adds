import useInput from '../../../hooks/useInput';
import useFiles from '../../../hooks/useFiles';
import { S3Folders } from '../../../constants/s3';
import { getMemberById, putMember } from '../../../api/member';
import Input from '../../Element/Shared/Input';
import AdminButton from '../../Element/Admin/AdminButton';
import FileUploadElement from '../../Element/Admin/FileUploadElement';
import ImagePreview from '../../Element/Admin/ImagePreview';
import { EditPageInnerShellProps, ViewPageProps } from '../../../@types/pages';
import { useEffect, useState } from 'react';
import { ResponseMember } from '../../../@types/api/member';
import useGet from '../../../hooks/useGet';
import excludeDeletedFileKeysFromFileString from '../../../utils/excludeDeletedFileKeysFromFileString';
import pickFileKeysToArrayFromFileString from '../../../utils/pickFileKeysToArrayFromFileString';
import { getDownloadLinkFromS3 } from '../../../s3/index';
import { SC } from '../../../styles/styled';

export default function MemberEditPage({ id }: ViewPageProps) {
	const [member, setMember] = useState<ResponseMember.GetById>();

	useEffect(() => {
		if (id !== undefined) useGet(() => getMemberById({ id }), setMember);
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
	} = useFiles(S3Folders.member, false);

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
			<Input label={'이름'} value={name} onChange={onChangeName} />
			<Input label={'이메일'} value={email} onChange={onChangeEmail} />
			<Input label={'홈페이지'} value={homepage} onChange={onChangeHomepage} />
			<Input label={'연락처'} value={phoneNumber} onChange={onChangePhoneNumber} />
			<Input label={'소개'} value={introBody} onChange={onChangeIntroBody} />
			<Input label={'직무'} value={jobTitle} onChange={onChangeJobTitle} />
			<Input label={'역할'} value={responsibility} onChange={onChangeResponsibility} />
			{prevFileKey && (
				<SC.PrevImage>
					<img src={getDownloadLinkFromS3(S3Folders.member, prevFileKey)} />
				</SC.PrevImage>
			)}
			<AdminButton onClick={() => onToggleToDelete(prevFileKey)}>기존사진 삭제토글</AdminButton>
			<ImagePreview file={files[0]} />
			<FileUploadElement files={files} onAddFile={onAddFile} onRemoveFile={onRemoveFile} />
			<AdminButton onClick={onSubmit}>완료</AdminButton>
		</>
	);
}
