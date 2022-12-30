import stringToJson from './stringToJson';

export default function excludeDeletedFileKeysFromFileString(
	file: string,
	deletedFileKeys: string[],
) {
	const parsedFileString: FileDataType[] = stringToJson(file);
	if (parsedFileString) {
		const excludeDeletedFileKeys = parsedFileString.filter(
			(file) => !deletedFileKeys.includes(file.key),
		);
		return excludeDeletedFileKeys;
	}
}
