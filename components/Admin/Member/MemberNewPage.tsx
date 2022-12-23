import useInput from '../../../hooks/useInput';
import useFiles from '../../../hooks/useFiles';
import { S3Folders } from '../../../constants/s3';
import { postMember } from '../../../api/member';
import Input from '../../Element/Shared/Input';
import AdminButton from '../../Element/Admin/AdminButton';
import FileUploadElement from '../../Element/Admin/FileUploadElement';
import { useEffect } from 'react';
import ImagePreview from '../../Element/Admin/ImagePreview';

export default function MemberNewPage() {
	const { value: name, onChange: onChangeName } = useInput();
	const { value: email, onChange: onChangeEmail } = useInput();
	const { value: homepage, onChange: onChangeHomepage } = useInput();
	const { value: phoneNumber, onChange: onChangePhoneNumber } = useInput();
	const { value: introBody, onChange: onChangeIntroBody } = useInput();
	const { value: jobTitle, onChange: onChangeJobTitle } = useInput();
	const { value: responsibility, onChange: onChangeResponsibility } = useInput();
	const { files, onAddFile, onRemoveFile, onUploadFile } = useFiles(S3Folders.member, false);

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
		const res = await postMember({
			name,
			email,
			homepage,
			phoneNumber,
			introBody,
			jobTitle,
			img: JSON.stringify(fileData),
			responsibility,
		});
		console.log(res);
	};

	useEffect(() => {
		console.log(files);
	}, [files]);

	return (
		<>
			새로운자료안내
			<Input label={'이름'} onChange={onChangeName} />
			<Input label={'이메일'} onChange={onChangeEmail} />
			<Input label={'홈페이지'} onChange={onChangeHomepage} />
			<Input label={'연락처'} onChange={onChangePhoneNumber} />
			<Input label={'소개'} onChange={onChangeIntroBody} />
			<Input label={'직무'} onChange={onChangeJobTitle} />
			<Input label={'역할'} onChange={onChangeResponsibility} />
			<ImagePreview file={files[0]} />
			<FileUploadElement files={files} onAddFile={onAddFile} onRemoveFile={onRemoveFile} />
			<AdminButton onClick={onSubmit}>완료</AdminButton>
		</>
	);
}
