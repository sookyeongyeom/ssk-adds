import useInput from '../../../hooks/useInput';
import useFiles from '../../../hooks/useFiles';
import { S3Folders } from '../../../constants/s3';
import Input from '../../Element/Shared/Input';
import AdminButton from '../../Element/Admin/AdminButton';
import FileUploadElement from '../../Element/Admin/FileUploadElement';
import ImagePreview from '../../Element/Admin/ImagePreview';
import { postPublication } from '../../../api/publication';

export default function PublicationNewPage() {
	const { value: writer, onChange: onChangeWriter } = useInput();
	const { value: title, onChange: onChangeTitle } = useInput();
	const {
		files: pdfs,
		onAddFile: onAddPdfs,
		onRemoveFile: onRemovePdfs,
		onUploadFile: onUploadPdfs,
	} = useFiles(S3Folders.publication, false);
	const {
		files: imgs,
		onAddFile: onAddImgs,
		onRemoveFile: onRemoveImgs,
		onUploadFile: onUploadImgs,
	} = useFiles(S3Folders.publication, false);

	const onSubmit = async () => {
		/* IMG 업로드 */
		let imgData: FileDataType[] = [];
		if (imgs?.length) {
			try {
				imgData = await onUploadImgs();
			} catch (e) {
				console.log(e);
				return;
			}
		}

		/* PDF 업로드 */
		let pdfData: FileDataType[] = [];
		if (pdfs?.length) {
			try {
				pdfData = await onUploadPdfs();
			} catch (e) {
				console.log(e);
				return;
			}
		}

		/* POST */
		const res = await postPublication({
			writer,
			title,
			img: JSON.stringify(imgData),
			pdf: JSON.stringify(pdfData),
		});
		console.log(res);
	};

	return (
		<>
			새로운발간물
			<Input label={'제목'} onChange={onChangeTitle} />
			<Input label={'작성자'} onChange={onChangeWriter} />
			IMG
			<ImagePreview file={imgs[0]} />
			<FileUploadElement files={imgs} onAddFile={onAddImgs} onRemoveFile={onRemoveImgs} />
			PDF
			<FileUploadElement files={pdfs} onAddFile={onAddPdfs} onRemoveFile={onRemovePdfs} />
			<AdminButton onClick={onSubmit}>완료</AdminButton>
		</>
	);
}