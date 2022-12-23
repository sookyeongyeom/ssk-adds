import useInput from '../../../hooks/useInput';
import { postResource } from '../../../api/resource';
import useEditorBody from '../../../hooks/useEditorBody';
import NewEditorPost from '../../Element/Admin/NewEditorPost';
import useFiles from '../../../hooks/useFiles';
import { S3Folders } from '../../../constants/s3';
import { postMember } from '../../../api/member';

export default function MemberNewPage() {
	const { value: name, onChange: onChangeName } = useInput();
	const { value: email, onChange: onChangeEmail } = useInput();
	const { value: homepage, onChange: onChangeHomepage } = useInput();
	const { value: phoneNumber, onChange: onChangePhoneNumber } = useInput();
	const { value: introBody, onChange: onChangeIntroBody } = useInput();
	const { value: jobTitle, onChange: onChangeJobTitle } = useInput();
	const { value: img, onChange: onChangeImg } = useInput();
	const { value: responsibility, onChange: onChangeResponsibility } = useInput();
	const { files, onAddFile, onRemoveFile, onUploadFile } = useFiles(S3Folders.member);

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
