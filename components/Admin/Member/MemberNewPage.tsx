import useInput from '../../../hooks/useInput';
import useFiles from '../../../hooks/useFiles';
import { S3Folders } from '../../../constants/s3';
import { postMember } from '../../../api/member';
import FileUploadElement from '../../Element/Admin/FileUploadElement';
import ImagePreview from '../../Element/Admin/ImagePreview';
import useRoute from '../../../hooks/useRoute';
import { Paths } from '../../../constants/paths';
import MemberNewEdit from './MemberNewEdit';
import { SC } from '../../../styles/styled';

export default function MemberNewPage() {
	const { value: name, onChange: onChangeName } = useInput();
	const { value: email, onChange: onChangeEmail } = useInput();
	const { value: homepage, onChange: onChangeHomepage } = useInput();
	const { value: phoneNumber, onChange: onChangePhoneNumber } = useInput();
	const { value: introBody, onChange: onChangeIntroBody } = useInput();
	const { value: jobTitle, onChange: onChangeJobTitle } = useInput();
	const { value: responsibility, onChange: onChangeResponsibility } = useInput();
	const { files, onAddFile, onRemoveFile, onUploadFile } = useFiles(S3Folders.member, false);
	const { onRouteToPath } = useRoute(Paths.admin + Paths.member);

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
		onRouteToPath();
	};

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
				<ImagePreview file={files[0]} />
				<FileUploadElement files={files} onAddFile={onAddFile} onRemoveFile={onRemoveFile} />
			</MemberNewEdit>
		</>
	);
}
