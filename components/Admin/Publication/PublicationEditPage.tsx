import useInput from '../../../hooks/useInput';
import useFiles from '../../../hooks/useFiles';
import { S3Folders } from '../../../constants/s3';
import FileUploadElement from '../../Element/Admin/FileUploadElement';
import { getPublicationById, putPublication } from '../../../api/publication';
import { EditPageInnerShellProps, ViewPageProps } from '../../../@types/pages';
import { useState, useEffect } from 'react';
import useGet from '../../../hooks/useGet';
import { ResponsePublication } from '../../../@types/api/publication';
import pickFileKeysToArrayFromFileString from '../../../utils/pickFileKeysToArrayFromFileString';
import excludeDeletedFileKeysFromFileString from '../../../utils/excludeDeletedFileKeysFromFileString';
import { SC } from '../../../styles/styled';
import { Paths } from '../../../constants/paths';
import useRoute from '../../../hooks/useRoute';
import PublicationNewEdit from './PublicationNewEdit';
import PrevToNewImage from '../../Element/Admin/PrevToNewImage';
import { svgRight } from '../../../styles/svgs';
import pickFileNamesToArrayFromFileString from '../../../utils/pickFileNamesToArrayFromFileString';
import styled from 'styled-components';
import PrevToNewPdf from '../../Element/Admin/PrevToNewPdf';

export default function PublicationEditPage({ id }: ViewPageProps) {
	const [publication, setPublication] = useState<ResponsePublication.GetById>();

	useEffect(() => {
		if (id !== undefined && !isNaN(id)) useGet(() => getPublicationById({ id }), setPublication);
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
		wishToDeleteFileKeys: wishToDeletePdfKeys,
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
		wishToDeleteFileKeys: wishToDeleteImgKeys,
	} = useFiles(S3Folders.publication, false);
	const { onRouteToPath } = useRoute(Paths.admin + Paths.publication + `/${id}`);

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
		onRouteToPath();
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
		<PublicationNewEdit
			title={title}
			writer={writer}
			onChangeTitle={onChangeTitle}
			onChangeWriter={onChangeWriter}
			onSubmit={onSubmit}>
			<SC.Label>사진</SC.Label>
			<PrevToNewImage
				prevFileKey={prevImgKey}
				wishToDeleteFileKeys={wishToDeleteImgKeys}
				files={imgs}
				folder={S3Folders.publication}
				onToggleToDelete={onToggleToDeleteImgs}
			/>
			<FileUploadElement files={imgs} onAddFile={onAddImgs} onRemoveFile={onRemoveImgs} />
			<SC.Label>PDF</SC.Label>
			<PrevToNewPdf
				pdfs={pdfs}
				prevPdfName={pickFileNamesToArrayFromFileString(data?.img)[0]}
				prevPdfKey={prevPdfKey}
				wishToDeletePdfKeys={wishToDeletePdfKeys}
				onToggleToDeletePdfs={onToggleToDeletePdfs}
			/>
			<FileUploadElement files={pdfs} onAddFile={onAddPdfs} onRemoveFile={onRemovePdfs} />
		</PublicationNewEdit>
	);
}
