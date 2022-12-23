import useInput from '../../../hooks/useInput';
import useFiles from '../../../hooks/useFiles';
import { S3Folders } from '../../../constants/s3';
import Input from '../../Element/Shared/Input';
import AdminButton from '../../Element/Admin/AdminButton';
import FileUploadElement from '../../Element/Admin/FileUploadElement';
import ImagePreview from '../../Element/Admin/ImagePreview';
import { getPublicationById, putPublication } from '../../../api/publication';
import { EditPageInnerShellProps, ViewPageProps } from '../../../@types/pages';
import { useState, useEffect } from 'react';
import useGet from '../../../hooks/useGet';
import { ResponsePublication } from '../../../@types/api/publication';
import pickFileKeysToArrayFromFileString from '../../../utils/pickFileKeysToArrayFromFileString';
import excludeDeletedFileKeysFromFileString from '../../../utils/excludeDeletedFileKeysFromFileString';
import { getDownloadLinkFromS3 } from '../../../s3/index';
import { SC } from '../../../styles/styled';

export default function PublicationEditPage({ id }: ViewPageProps) {
	const [publication, setPublication] = useState<ResponsePublication.GetById>();

	useEffect(() => {
		if (id) useGet(() => getPublicationById({ id }), setPublication);
	}, [id]);

	return <>{publication && <PublicationEditPageInnerShell id={id} data={publication} />}</>;
}

function PublicationEditPageInnerShell({
	id,
	data,
}: Omit<EditPageInnerShellProps<ResponsePublication.GetById>, 'path'>) {
	const prevImgKey = data?.img && pickFileKeysToArrayFromFileString(data.img)[0];
	const prevPdfKey = data?.pdf && pickFileKeysToArrayFromFileString(data.pdf)[0];
	const { value: writer, onChange: onChangeWriter } = useInput(data?.writer);
	const { value: title, onChange: onChangeTitle } = useInput(data?.title);
	const {
		files: pdfs,
		onAddFile: onAddPdfs,
		onRemoveFile: onRemovePdfs,
		onUploadFile: onUploadPdfs,
		onDeleteFile: onDeletePdfs,
		onSelectSingleToDelete: onSelectSingleToDeletePdfs,
		onResetDeleteWishList: onResetDeleteWishListPdfs,
		onToggleToDelete: onToggleToDeletePdfs,
	} = useFiles(S3Folders.publication, false);
	const {
		files: imgs,
		onAddFile: onAddImgs,
		onRemoveFile: onRemoveImgs,
		onUploadFile: onUploadImgs,
		onDeleteFile: onDeleteImgs,
		onSelectSingleToDelete: onSelectSingleToDeleteImgs,
		onResetDeleteWishList: onResetDeleteWishListImgs,
		onToggleToDelete: onToggleToDeleteImgs,
	} = useFiles(S3Folders.publication, false);

	const onSubmit = async () => {
		/* IMG 삭제 */
		let deletedImgKeys: string[] | undefined;
		try {
			deletedImgKeys = await onDeleteImgs();
			console.log(deletedImgKeys);
		} catch (e) {
			console.log(e);
			return;
		}

		/* PDF 삭제 */
		let deletedPdfKeys: string[] | undefined;
		try {
			deletedPdfKeys = await onDeletePdfs();
			console.log(deletedPdfKeys);
		} catch (e) {
			console.log(e);
			return;
		}

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

		const manipulatedPrevImgs =
			!!data && !!deletedImgKeys && excludeDeletedFileKeysFromFileString(data.img, deletedImgKeys);

		const manipulatedPrevPdfs =
			!!data && !!deletedPdfKeys && excludeDeletedFileKeysFromFileString(data.pdf, deletedPdfKeys);

		/* PUT */
		const res = await putPublication({
			id,
			writer,
			title,
			img: JSON.stringify([...(manipulatedPrevImgs || []), ...imgData]),
			pdf: JSON.stringify([...(manipulatedPrevPdfs || []), ...pdfData]),
		});
		console.log(res);
	};

	useEffect(() => {
		if (imgs.length) {
			onSelectSingleToDeleteImgs(prevImgKey);
			return;
		}
		onResetDeleteWishListImgs();
	}, [imgs]);

	useEffect(() => {
		if (pdfs.length) {
			onSelectSingleToDeletePdfs(prevPdfKey);
			return;
		}
		onResetDeleteWishListPdfs();
	}, [pdfs]);

	return (
		<>
			발간물수정
			<Input label={'제목'} value={title} onChange={onChangeTitle} />
			<Input label={'작성자'} value={writer} onChange={onChangeWriter} />
			IMG
			{prevImgKey && (
				<SC.PrevImage>
					<img src={getDownloadLinkFromS3(S3Folders.publication, prevImgKey)} />
				</SC.PrevImage>
			)}
			<AdminButton onClick={() => onToggleToDeleteImgs(prevImgKey)}>기존IMG 삭제토글</AdminButton>
			<ImagePreview file={imgs[0]} />
			<FileUploadElement files={imgs} onAddFile={onAddImgs} onRemoveFile={onRemoveImgs} />
			PDF
			{prevPdfKey}
			<AdminButton onClick={() => onToggleToDeletePdfs(prevPdfKey)}>기존PDF 삭제토글</AdminButton>
			<FileUploadElement files={pdfs} onAddFile={onAddPdfs} onRemoveFile={onRemovePdfs} />
			<AdminButton onClick={onSubmit}>완료</AdminButton>
		</>
	);
}
