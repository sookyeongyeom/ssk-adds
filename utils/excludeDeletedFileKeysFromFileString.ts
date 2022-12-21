export default function excludeDeletedFileKeysFromFileString(
	file: string,
	deletedFileKeys: string[],
) {
	const parsedFileString: FileDataType[] = JSON.parse(file);
	const excludeDeletedFileKeys = parsedFileString.filter(
		(file) => !deletedFileKeys.includes(file.key),
	);
	return excludeDeletedFileKeys;
}
