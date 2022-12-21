import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { uploadFileToS3 } from '../s3';
import { S3Folders } from '../constants/s3';

export default function useFiles(folder: typeof S3Folders[keyof typeof S3Folders]) {
	const [files, setFiles] = useState<File[]>([]);

	const onAddFile = (targetFiles: File[]) => {
		const includeTargetFiles = [...files];
		/* 중복 파일은 제외 */
		const prevFilesLastModified = files.map((file) => file.lastModified);
		targetFiles.forEach((file) => {
			if (!prevFilesLastModified.includes(file.lastModified)) includeTargetFiles.push(file);
		});
		setFiles(includeTargetFiles);
	};

	const onRemoveFile = (targetLastModified: number) => {
		const excludeTargetFile = [...files].filter((file) => file.lastModified !== targetLastModified);
		setFiles(excludeTargetFile);
	};

	/**
	 * @성공 {파일키:파일이름}[] 반환
	 * @실패 throw e */
	const onUploadFile = async () => {
		let fileData: FileDataType[] = [];
		const promises = files.map((file) => {
			const fileName = uuidv4();
			fileData.push({ key: fileName, name: file.name });
			return uploadFileToS3(folder, fileName, file);
		});
		try {
			await Promise.all(promises);
			return fileData;
		} catch (e) {
			throw e;
		}
	};

	return { files, onAddFile, onRemoveFile, onUploadFile };
}
