export default function pickFileNamesToArrayFromFileString(file: string | undefined) {
	if (file === undefined) return;
	return JSON.parse(file).map((file: FileDataType) => file.name);
}
