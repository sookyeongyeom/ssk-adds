import AWS from 'aws-sdk';
import { S3Folders } from '../constants/s3';

const bucketName = process.env.NEXT_PUBLIC_S3_BUCKET_NAME;
const region = process.env.NEXT_PUBLIC_S3_REGION;
const identityPoolId = process.env.NEXT_PUBLIC_S3_IDENTIFY_POOL_ID;

AWS.config.region = region;
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
	IdentityPoolId: identityPoolId!,
});

const s3 = new AWS.S3({ apiVersion: '2006-03-01', params: { Bucket: bucketName } });

/**
 * S3 파일 업로드 */
export const uploadFileToS3 = (
	folder: typeof S3Folders[keyof typeof S3Folders],
	fileKey: string,
	file: File,
) => {
	const fullKey = encodeURIComponent(folder) + '/' + fileKey;
	const upload = new AWS.S3.ManagedUpload({
		params: {
			Bucket: bucketName!,
			Key: fullKey,
			Body: file,
		},
	});
	const promise = upload.promise();
	promise.then(console.log, console.log);
	return promise;
};

/**
 * S3 파일 다운로드 링크 반환 */
export const getDownloadLinkFromS3 = (folder: string, fileKey: string) => {
	const fullKey = encodeURIComponent(folder) + '/' + fileKey;
	return `https://s3.${region}.amazonaws.com/${bucketName}/${fullKey}`;
};

/**
 * S3 파일 삭제 */
export const deleteFileFromS3 = (folder: string, fileKey: string) => {
	let fullKey = encodeURIComponent(folder) + '/' + fileKey;
	const promise = s3.deleteObject({ Bucket: bucketName!, Key: fullKey }).promise();
	promise.then(console.log, console.log);
	return promise;
};
