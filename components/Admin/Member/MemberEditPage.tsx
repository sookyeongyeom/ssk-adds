import useInput from '../../../hooks/useInput';
import useFiles from '../../../hooks/useFiles';
import { S3Folders } from '../../../constants/s3';
import { getMemberById, putMember } from '../../../api/member';
import Input from '../../Element/Shared/Input';
import AdminButton from '../../Element/Admin/AdminButton';
import FileUploadElement from '../../Element/Admin/FileUploadElement';
import ImagePreview from '../../Element/Admin/ImagePreview';
import { MemberEditPageInnerShellProps, ViewPageProps } from '../../../@types/pages';
import { useEffect, useState } from 'react';
import { ResponseMember } from '../../../@types/api/member';
import useGet from '../../../hooks/useGet';
import excludeDeletedFileKeysFromFileString from '../../../utils/excludeDeletedFileKeysFromFileString';
import pickFileKeysToArrayFromFileString from '../../../utils/pickFileKeysToArrayFromFileString';
import { getDownloadLinkFromS3 } from '../../../s3/index';
import styled from 'styled-components';

export default function MemberEditPage({ id }: ViewPageProps) {
	const [member, setMember] = useState<ResponseMember.GetById>();

	useEffect(() => {
		if (id) useGet(() => getMemberById({ id }), setMember);
	}, [id]);

	return <>{member && <MemberEditPageInnerShell id={id} member={member} />}</>;
}

function MemberEditPageInnerShell({ id, member }: MemberEditPageInnerShellProps) {
	const prevFileKey = member.img && pickFileKeysToArrayFromFileString(member.img)[0];
	const { value: name, onChange: onChangeName } = useInput(member.name);
	const { value: email, onChange: onChangeEmail } = useInput(member.email);
	const { value: homepage, onChange: onChangeHomepage } = useInput(member.homepage);
	const { value: phoneNumber, onChange: onChangePhoneNumber } = useInput(member.phoneNumber);
	const { value: introBody, onChange: onChangeIntroBody } = useInput(member.introBody);
	const { value: jobTitle, onChange: onChangeJobTitle } = useInput(member.jobTitle);
	/* prettier-ignore */
	const { value: responsibility, onChange: onChangeResponsibility } = useInput(member.responsibility);
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
			!!member &&
			!!deletedFileKeys &&
			excludeDeletedFileKeysFromFileString(member.img, deletedFileKeys);

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
			연구진소개수정
			<Input label={'이름'} value={name} onChange={onChangeName} />
			<Input label={'이메일'} value={email} onChange={onChangeEmail} />
			<Input label={'홈페이지'} value={homepage} onChange={onChangeHomepage} />
			<Input label={'연락처'} value={phoneNumber} onChange={onChangePhoneNumber} />
			<Input label={'소개'} value={introBody} onChange={onChangeIntroBody} />
			<Input label={'직무'} value={jobTitle} onChange={onChangeJobTitle} />
			<Input label={'역할'} value={responsibility} onChange={onChangeResponsibility} />
			{prevFileKey && (
				<S.PrevImage>
					<img src={getDownloadLinkFromS3(S3Folders.member, prevFileKey)} />
				</S.PrevImage>
			)}
			<AdminButton onClick={() => onToggleToDelete(prevFileKey)}>기존사진 삭제토글</AdminButton>
			<ImagePreview file={files[0]} />
			<FileUploadElement files={files} onAddFile={onAddFile} onRemoveFile={onRemoveFile} />
			<AdminButton onClick={onSubmit}>완료</AdminButton>
		</>
	);
}

namespace S {
	export const PrevImage = styled.div`
		width: 15rem;
		height: 18rem;

		> img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	`;
}
