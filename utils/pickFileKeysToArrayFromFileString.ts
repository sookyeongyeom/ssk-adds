export default function pickFileKeysToArrayFromFileString(file: string) {
	return JSON.parse(file).map((file: FileDataType) => file.key);
}
