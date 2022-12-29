import useInput from '../../../hooks/useInput';
import useFiles from '../../../hooks/useFiles';
import { S3Folders } from '../../../constants/s3';
import FileUploadElement from '../../Element/Admin/FileUploadElement';
import ImagePreview from '../../Element/Admin/ImagePreview';
import { postPublication } from '../../../api/publication';
import useRoute from '../../../hooks/useRoute';
import { Paths } from '../../../constants/paths';
import { SC } from '../../../styles/styled';
import PublicationNewEdit from './PublicationNewEdit';

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
	const { onRouteToPath } = useRoute(Paths.admin + Paths.publication);

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
		onRouteToPath();
	};

	return (
		<>
			<PublicationNewEdit
				title={title}
				writer={writer}
				onChangeTitle={onChangeTitle}
				onChangeWriter={onChangeWriter}
				onSubmit={onSubmit}>
				<SC.Label>사진</SC.Label>
				<ImagePreview file={imgs[0]} />
				<FileUploadElement files={imgs} onAddFile={onAddImgs} onRemoveFile={onRemoveImgs} />
				<SC.Label>PDF</SC.Label>
				{pdfs[0]?.name || <SC.Empty>PDF 없음</SC.Empty>}
				<FileUploadElement files={pdfs} onAddFile={onAddPdfs} onRemoveFile={onRemovePdfs} />
			</PublicationNewEdit>
		</>
	);
}
