import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { uploadFileToS3 } from '../s3';
import { S3Folders } from '../constants/s3';
import { deleteFileFromS3 } from '../s3/index';

export default function useFiles(
	folder: typeof S3Folders[keyof typeof S3Folders],
	isMultiple = true,
) {
	const [files, setFiles] = useState<File[]>([]);
	const [wishToDeleteFileKeys, setWishToDeleteFileKeys] = useState<Set<string>>(new Set<string>());

	const onAddFile = (targetFiles: File[]) => {
		if (isMultiple) {
			const includeTargetFiles = [...files];
			/* 중복 파일은 제외 */
			const prevFilesLastModified = files.map((file) => file.lastModified);
			targetFiles.forEach((file) => {
				if (!prevFilesLastModified.includes(file.lastModified)) includeTargetFiles.push(file);
			});
			setFiles(includeTargetFiles);
			return;
		}
		/* !isMultiple */
		if (targetFiles.length !== 1) alert('해당 항목에는 하나의 파일만 등록할 수 있습니다.');
		else setFiles(targetFiles);
	};

	const onRemoveFile = (targetLastModified: number) => {
		const excludeTargetFile = [...files].filter((file) => file.lastModified !== targetLastModified);
		setFiles(excludeTargetFile);
	};

	const onToggleToDelete = (targetFileKey: string) => {
		const manipulatedKeys = new Set(wishToDeleteFileKeys);
		if (wishToDeleteFileKeys.has(targetFileKey)) manipulatedKeys.delete(targetFileKey);
		else manipulatedKeys.add(targetFileKey);
		setWishToDeleteFileKeys(manipulatedKeys);
	};

	const onSelectSingleToDelete = (targetFileKey: string) => {
		setWishToDeleteFileKeys(new Set<string>().add(targetFileKey));
	};

	const onResetDeleteWishList = () => {
		setWishToDeleteFileKeys(new Set<string>());
	};

	/**
	 * @성공 {파일키:파일이름}[] 반환
	 * @실패 throw e */
	const onUploadFile = async () => {
		let fileData: FileDataType[] = [];
		const promises = files.map((file) => {
			const fileKey = uuidv4();
			fileData.push({ key: fileKey, name: file.name });
			return uploadFileToS3(folder, fileKey, file);
		});
		try {
			await Promise.all(promises);
			return fileData;
		} catch (e) {
			throw e;
		}
	};

	/**
	 * @성공 파일키[] 반환
	 * @실패 throw e */
	const onDeleteFile = async () => {
		if (wishToDeleteFileKeys) {
			const promises = Array.from(wishToDeleteFileKeys).map((fileKey) => {
				return deleteFileFromS3(folder, fileKey);
			});
			try {
				await Promise.all(promises);
				return Array.from(wishToDeleteFileKeys);
			} catch (e) {
				throw e;
			}
		}
	};

	return {
		files,
		onAddFile,
		onRemoveFile,
		onUploadFile,
		onDeleteFile,
		onToggleToDelete,
		onSelectSingleToDelete,
		onResetDeleteWishList,
		wishToDeleteFileKeys,
	};
}
